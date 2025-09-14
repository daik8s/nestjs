import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class Hashtag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "text",
    nullable: false,
    unique: true,
  })
  name: string;
}
