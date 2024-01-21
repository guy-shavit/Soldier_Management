import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'soldier_management_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export = config;
