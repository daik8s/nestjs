import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
export class CreateTweetDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsOptional()
  image: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsOptional()
  @IsInt({ each: true })
  @IsArray()
  hashtags?: number[];
}
