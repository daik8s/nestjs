import { Injectable } from '@nestjs/common';
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

  getTweets() {}
}
