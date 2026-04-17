import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User.ts';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['src/db/migrations/*.ts'],
  subscribers: [],
});
