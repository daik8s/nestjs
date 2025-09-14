import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hashtag } from './hashtag.entity';
import { In, Repository } from 'typeorm';
import { CreateHashtagDto } from './dtos/create-hashtag.dto';

@Injectable()
export class HashtagService {
  constructor(
    @InjectRepository(Hashtag) private hashtagRepository: Repository<Hashtag>,
  ) {}

  public async createHashtag(hashtagDto: CreateHashtagDto) {
    const hashtag = this.hashtagRepository.create(hashtagDto);

    return this.hashtagRepository.save(hashtag);
  }

  public async findHashtags(hashtags: number[]) {
    return await this.hashtagRepository.find({
      where: {
        id: In(hashtags),
      },
    });
  }
}
