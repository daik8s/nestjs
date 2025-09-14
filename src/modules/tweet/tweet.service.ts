import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tweet } from './tweet.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UsersService } from '../users/users.service';
import { HashtagService } from '../hashtag/hashtag.service';
import { UpdateTweetDto } from './dto/update-tweet.dto';

@Injectable()
export class TweetService {
  constructor(
    @InjectRepository(Tweet)
    private readonly tweetRepository: Repository<Tweet>,
    private readonly usersService: UsersService,
    private readonly hashtagService: HashtagService,
  ) {}

  /**
   * Get tweets by user id
   * @param userId - User id
   * @returns Tweets
   */
  public async getTweets(userId: string) {
    const tweets = await this.tweetRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
      relations: ['user', 'hashtags'],
    });

    return tweets;
  }

  /**
   * Create a tweet
   * @param tweetDto - Tweet data
   * @returns Tweet
   */
  public async createTweet(tweetDto: CreateTweetDto) {
    const user = await this.usersService.findUserById(tweetDto.userId);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const hashtags = await this.hashtagService.findHashtags(
      tweetDto.hashtags || [],
    );

    const tweet = this.tweetRepository.create({
      ...tweetDto,
      user,
      hashtags,
    });
    return await this.tweetRepository.save(tweet);
  }

  /**
   * Update a tweet
   * @param tweetDto - Tweet data
   * @returns Tweet
   */
  public async updateTweet(tweetDto: UpdateTweetDto) {
    const hashtags = await this.hashtagService.findHashtags(
      tweetDto.hashtags || [],
    );

    const tweet = await this.tweetRepository.findOneBy({ id: tweetDto.id });
    if (!tweet) {
      throw new NotFoundException('Tweet not found');
    }
    tweet.text = tweetDto.text ?? tweet.text;
    tweet.image = tweetDto.image ?? tweet.image;
    tweet.hashtags = hashtags;

    return await this.tweetRepository.save(tweet);
  }
}
