import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldiersController } from './soldiers.controller';
import { SoldiersService } from './soldiers.service';
import { Soldier } from './entities/soldier.entity';
import { Event } from './entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Soldier, Event])],
  controllers: [SoldiersController],
  providers: [SoldiersService],
})
export class SoldiersModule {}
