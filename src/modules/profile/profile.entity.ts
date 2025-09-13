import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 10,
  })
  gender: string;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  dateOfBirth: Date;

  @Column({
    type: 'text',
    nullable: true,
  })
  bio: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  profileImage: string;

  @OneToOne(() => Users, (user) => user.profile, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: Users;
}
