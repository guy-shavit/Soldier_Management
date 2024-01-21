import { Module } from '@nestjs/common';
import { SoldiersController } from './soldiers/soldiers.controller';  // adjust the path based on your project structure
import { SoldiersService } from './soldiers/soldiers.service';

@Module({
  controllers: [SoldiersController],
  providers: [SoldiersService],
})
export class AppModule {}
