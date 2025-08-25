import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  name: string;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isMarried: boolean;
}
