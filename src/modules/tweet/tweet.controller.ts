import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TweetService } from './tweet.service';
import { CreateTweetDto } from './dto/create-tweet.dto';

@Controller('tweet')
export class TweetController {
  constructor(private tweetService: TweetService) {}

  @Get('/:userid')
  public GetTweets(@Param('userid') userid: string) {
    return this.tweetService.getTweets(userid);
  }

  @Post()
  public createTweet(@Body() tweetDto: CreateTweetDto) {
    return this.tweetService.createTweet(tweetDto);
  }
}
