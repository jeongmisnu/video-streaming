import { UniqueNum } from './uniqueNum.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  create_at: Date;

  @ManyToMany(() => UniqueNum, (un) => un.user)
  @JoinTable({ name: 'user_unique' })
  uniqueNum: UniqueNum[];
}
