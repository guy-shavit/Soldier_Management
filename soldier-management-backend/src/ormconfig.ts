import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'soldierManagement_db',
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
};

export default config;
