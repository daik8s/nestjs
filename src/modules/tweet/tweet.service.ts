import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
    private readonly usersService: UsersService,
  ) {}

  public async getTweets(userId: string) {
    const tweets = await this.tweetRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user'],
    });

    return tweets;
  }

  public async createTweet(tweetDto: CreateTweetDto) {
    const user = await this.usersService.findUserById(tweetDto.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const tweet = this.tweetRepository.create({
      ...tweetDto,
      user,
    });
    return await this.tweetRepository.save(tweet);
  }
}
