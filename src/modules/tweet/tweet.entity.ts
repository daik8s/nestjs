import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Hashtag } from '../hashtag/hashtag.entity';

@Entity()
export class Tweet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  text: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  image?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.tweets, { eager: true })
  user: Users;

  @ManyToMany(() => Hashtag)
  @JoinTable()
  hashtags: Hashtag[];
}
