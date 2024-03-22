import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UniqueNum {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  num: number;

  @ManyToMany(() => User, (u) => u.uniqueNum)
  user: User[];
}
