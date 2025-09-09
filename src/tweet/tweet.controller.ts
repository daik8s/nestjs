import { Controller, Get } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get('/:userid')
  public GetTweets() {
    return true;
  }
}
