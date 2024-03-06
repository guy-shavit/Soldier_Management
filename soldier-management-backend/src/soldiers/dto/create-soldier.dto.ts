import { Role } from '../enums/role.enum';
import { CreateEventDto } from './create-event.dto';

export class CreateSoldierDto {
  firstName: string;
  lastName: string;
  team: string;
  department: string;
  soldierId: string;
  startDate: string;
  endDate: string;
  role: Role;
  events: CreateEventDto[];
}
