// soldiers/entities/event.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Soldier } from './soldier.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  eventName: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @ManyToOne(() => Soldier, soldier => soldier.events)
  soldier: Soldier;
}
