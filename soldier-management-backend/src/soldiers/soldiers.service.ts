
import { Injectable } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Injectable()
export class SoldiersService {
  private soldiers = [];

  findAll() {
    return this.soldiers;
  }

  findOne(id: number) {
    return this.soldiers.find((soldier) => soldier.id === id);
  }

  create(createSoldierDto: CreateSoldierDto) {
    const newSoldier = {
      id: this.soldiers.length + 1,
      ...createSoldierDto,
    };
    this.soldiers.push(newSoldier);
    return newSoldier;
  }

  update(id: number, updateSoldierDto: UpdateSoldierDto) {
    const soldier = this.soldiers.find((s) => s.id === id);
    if (!soldier) {
      return null;
    }
    Object.assign(soldier, updateSoldierDto);
    return soldier;
  }

  remove(id: number) {
    const index = this.soldiers.findIndex((s) => s.id === id);
    if (index !== -1) {
      this.soldiers.splice(index, 1);
      return true;
    }
    return false;
  }
}