import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class SoldiersService {
  private soldiers = [
    { id: 1, firstName: 'John', lastName: 'Doe', team: 'Alpha', soldiersID: '12341234', events: [] },
    { id: 2, firstName: 'Jane', lastName: 'Doe', team: 'Bravo', events: [] },
  ];

  findAll() {
    return this.soldiers;
  }

  findOne(id: number) {
    return this.soldiers.find((soldier) => soldier.id === id);
  }

  create(createSoldierDto: CreateSoldierDto) {
    const newSoldier = {
      id: this.soldiers.length + 1,
      events: [],
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

  addEventToSoldier(id: number, createEventDto: CreateEventDto) {
    const soldier = this.soldiers.find((s) => s.id === id);
    if (!soldier) {
      throw new NotFoundException(`Soldier with ID ${id} not found.`);
    }

    const newEvent = {
      eventId: soldier.events.length + 1,
      ...createEventDto,
    };

    soldier.events.push(newEvent);
    return newEvent;
  }

  findAllEvents() {
    return this.soldiers.reduce((events, soldier) => [...events, ...soldier.events], []);
  }

  findEventById(eventId: number) {
    for (const soldier of this.soldiers) {
      const event = soldier.events.find((e) => e.eventId === eventId);
      if (event) {
        return event;
      }
    }
    throw new NotFoundException(`Event with ID ${eventId} not found.`);
  }

  updateEvent(eventId: number, updateEventDto: UpdateEventDto) {
    for (const soldier of this.soldiers) {
      const event = soldier.events.find((e) => e.eventId === eventId);
      if (event) {
        Object.assign(event, updateEventDto);
        return event;
      }
    }
    throw new NotFoundException(`Event with ID ${eventId} not found.`);
  }

  deleteEvent(eventId: number) {
    for (const soldier of this.soldiers) {
      const index = soldier.events.findIndex((e) => e.eventId === eventId);
      if (index !== -1) {
        soldier.events.splice(index, 1);
        return true;
      }
    }
    throw new NotFoundException(`Event with ID ${eventId} not found.`);
  }
}
