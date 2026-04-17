import { AppDataSource } from './data-source.ts';
import { User } from '../entities/User.ts';

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Run migrations
    await AppDataSource.runMigrations();
    console.log('Migrations have been run!');

    // Seed data if database is empty
    const userRepository = AppDataSource.getRepository(User);
    const count = await userRepository.count();
    if (count === 0) {
      await userRepository.save([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
      console.log('Database seeded with initial users.');
    }
  } catch (err) {
    console.error('Error during Data Source initialization', err);
    throw err;
  }
};
