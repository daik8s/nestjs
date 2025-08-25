import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number;
    name: string;
    email: string;
    gender: string;
    isMarried: boolean;
  }[] = [
    {
      id: 1,
      name: 'John',
      email: 'john@example.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 2,
      name: 'Jane',
      email: 'jane@example.com',
      gender: 'female',
      isMarried: true,
    },
    {
      id: 3,
      name: 'Jim',
      email: 'jim@example.com',
      gender: 'male',
      isMarried: false,
    },
    {
      id: 4,
      name: 'Jill',
      email: 'jill@example.com',
      gender: 'female',
      isMarried: true,
    },
  ];

  getAllUsers(limit: number, page: number) {
    return this.users.slice((page - 1) * limit, page * limit);
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
  }) {
    this.users.push(user);
  }
}
