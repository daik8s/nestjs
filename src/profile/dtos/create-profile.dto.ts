import {
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
  IsDate,
} from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @IsOptional()
  @MaxLength(100, {
    message: 'FirstName must be less than 100 characters long',
  })
  @MinLength(3, { message: 'FirstName must be at least 3 characters long' })
  firstName?: string;

  @IsString()
  @MinLength(3, { message: 'LastName must be at least 3 characters long' })
  @MaxLength(100, { message: 'LastName must be less than 100 characters long' })
  lastName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10, { message: 'Gender must be less than 100 characters long' })
  gender?: string;

  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
