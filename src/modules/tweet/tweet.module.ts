import { Module } from '@nestjs/common';
import { TweetController } from './tweet.controller';
import { TweetService } from './tweet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tweet } from './tweet.entity';
import { UsersModule } from '../users/users.module';
import { HashtagModule } from '../hashtag/hashtag.module';

@Module({
  controllers: [TweetController],
  providers: [TweetService],
  imports: [UsersModule, TypeOrmModule.forFeature([Tweet]), HashtagModule],
})
export class TweetModule {}
