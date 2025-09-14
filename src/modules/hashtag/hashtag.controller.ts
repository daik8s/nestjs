import { Body, Controller, Post } from '@nestjs/common';
import { CreateHashtagDto } from './dtos/create-hashtag.dto';
import { HashtagService } from './hashtag.service';

@Controller("hashtag")
export class HashtagController {
  constructor(private readonly hashtagService: HashtagService) {}

  @Post()
  public async createHashtag(@Body() hashtagDto: CreateHashtagDto) {
    return this.hashtagService.createHashtag(hashtagDto);
  }
}
