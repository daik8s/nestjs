import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  getAllUsers() {
    return this.usersRepository.find();
  }

  public async createUser(userDto: CreateUserDto) {
    // Validate if a user exist with the give email
    const user = await this.usersRepository.findOne({
      where: { email: userDto.email },
    });
    // Handle the error / exception
    if (user) {
      throw new BadRequestException('User already exists');
    }
    // Create that user
    let newUser = this.usersRepository.create(userDto);
    newUser = await this.usersRepository.save(newUser);
    return newUser;
  }
}
