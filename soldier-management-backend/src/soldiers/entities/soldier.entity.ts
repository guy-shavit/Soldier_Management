// soldiers/entities/soldier.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Soldier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  team: string;

  @Column()
  department: string;

  @Column()
  soldierId: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column()
  role: string;

  @OneToMany(() => Event, event => event.soldier)
  events: Event[];
}
