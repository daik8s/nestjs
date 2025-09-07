import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    // return this.usersService.createUser(body);
  }

  @Patch(':id')
  updateUser(@Body() user: UpdateUserDto) {
    console.log(user);
    return 'User updated successfully';
  }
}
