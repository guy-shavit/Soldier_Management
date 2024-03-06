import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { SoldiersService } from './soldiers.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('soldiers')
export class SoldiersController {
  constructor(private readonly soldiersService: SoldiersService) {}

  // CRUD endpoints for soldiers

  @Get()
  findAll() {
    return this.soldiersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldiersService.findOne(+id);
  }

  @Post()
  create(@Body() createSoldierDto: CreateSoldierDto) {
    if (!createSoldierDto.role) {
      throw new BadRequestException('Role is required.');
    }
    return this.soldiersService.create(createSoldierDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSoldierDto: UpdateSoldierDto) {
    return this.soldiersService.update(+id, updateSoldierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldiersService.remove(+id);
  }

  // CRUD endpoints for events

  @Post(':id/events')
  addEventToSoldier(@Param('id') id: string, @Body() createEventDto: CreateEventDto) {
    return this.soldiersService.addEventToSoldier(+id, createEventDto);
  }

  @Get('events')
  findAllEvents() {
    return this.soldiersService.findAllEvents();
  }

  @Get('events/:id')
  findEventById(@Param('id') id: string) {
    return this.soldiersService.findEventById(+id);
  }

  @Put('events/:id')
  updateEvent(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.soldiersService.updateEvent(+id, updateEventDto);
  }

  @Delete('events/:id')
  deleteEvent(@Param('id') id: string) {
    return this.soldiersService.deleteEvent(+id);
  }
}
