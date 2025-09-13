import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateProfileDto } from '../../profile/dtos/create-profile.dto';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100, { message: 'Email must be less than 100 characters long' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(24, { message: 'Username must be less than 24 characters long' })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @MaxLength(100, { message: 'Password must be less than 100 characters long' })
  password: string;

  @IsOptional()
  profile: CreateProfileDto;
}
