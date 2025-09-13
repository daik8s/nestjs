import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Profile } from '../profile/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,

    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  public getAllUsers() {
    return this.usersRepository.find({
      relations: ['profile'],
    });
  }

  public async createUser(userDto: CreateUserDto) {
    userDto.profile = userDto.profile ?? null;
    const user = this.usersRepository.create(userDto);

    return await this.usersRepository.save(user);
  }

  public async deleteUser(id: string) {
    await this.usersRepository.delete(id);

    return {
      deleted: true,
    };
  }

  public async findUserById(id: string) {
    return await this.usersRepository.findOne({
      where: { id },
      relations: ['profile'],
    });
  }
}
