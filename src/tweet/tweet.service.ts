import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {
  constructor(private usersService: UsersService) {}
  tweets: { text: string; date: Date; userid: number }[] = [
    {
      text: 'Hello World',
      date: new Date(),
      userid: 1,
    },
    {
      text: 'Hello World 2',
      date: new Date(),
      userid: 1,
    },
    {
      text: 'Hello World 3',
      date: new Date(),
      userid: 2,
    },
  ];

  getTweets(userid: number) {
    const user = this.usersService.getUserById(userid);
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const tweets = this.tweets.filter((tweet) => tweet.userid === userid);
    const response = tweets.map((tweet) => ({
      text: tweet.text,
      date: tweet.date,
      name: user.name,
    }));

    return response;
  }
}
