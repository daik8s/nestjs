import { IsNotEmpty, IsString } from 'class-validator';
import { CreateTweetDto } from './create-tweet.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTweetDto extends PartialType(CreateTweetDto) {
  @IsNotEmpty()
  @IsString()
  id: string;
}
