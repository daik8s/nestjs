import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      gender: 'male',
      isMarried: false,
      password: '123456',
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@example.com',
      gender: 'female',
      isMarried: true,
      password: '123456',
    },
    {
      id: 3,
      name: 'Jim',
      email: 'jim@example.com',
      gender: 'male',
      isMarried: false,
      password: '123456',
    },
    {
      id: 4,
      name: 'Jill',
      email: 'jill@example.com',
      gender: 'female',
      isMarried: true,
      password: '123456',
    },
  ];

  getAllUsers() {
    if (!this.authService.isAuthenticated) {
      throw new UnauthorizedException('Unauthorized');
    }

    return this.users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
    password: string;
  }) {
    this.users.push(user);
  }
}
