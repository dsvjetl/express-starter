# Express TypeScript SQLite Project

A modern boilerplate for building Express applications using TypeScript, ESM, and TypeORM with SQLite.

## Features

- **Express Server**: Set up basic Express application with ESM support.
- **TypeScript Integration**: Full TypeScript support with `tsx` for development and `esbuild` for production builds.
- **TypeORM & SQLite**: Integrated TypeORM for database management using SQLite.
- **Database Migrations**: Configured TypeORM migrations for database schema versioning.
- **Database Seeding**: Automatic seeding of initial users if the database is empty.
- **Backup Service**: Implemented a database backup service that:
  - Creates timestamped `.sqlite` backups.
  - Automatically cleans up backups older than the last 7 copies.
  - Can be triggered manually via `npm run db:backup`.
- **User Routes**: Basic REST API endpoint `GET /` to retrieve all users.
- **Linting & Formatting**: Configured ESLint and Prettier for code quality and consistency.
- **Cron Jobs Ready**: `node-cron` dependency included for future scheduled tasks.

## Getting Started

### Prerequisites

- Node.js (v24 or higher recommended)
- NPM

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd express-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server with hot-reloading:
```bash
npm run dev
```
The server will run at `http://localhost:3000`.

### Production

To build and run the application in production:
```bash
npm run build
npm start
```

## Available Scripts

- `npm run dev`: Starts the development server with `tsx watch`. It also triggers a database backup before starting.
- `npm run build`: Bundles the application using `esbuild`.
- `npm start`: Runs the built application from `dist/index.js`.
- `npm run lint`: Runs ESLint to check for code issues.
- `npm run format`: Runs Prettier to format the codebase.
- `npm run typeorm`: Wrapper for TypeORM CLI.
- `npm run migration:generate -- name=MigrationName`: Generates a new migration.
- `npm run migration:run`: Runs pending migrations.
- `npm run migration:revert`: Reverts the last migration.
- `npm run db:backup`: Manually triggers a database backup.

## Project Structure

- `src/index.ts`: Application entry point.
- `src/db/`: TypeORM data source, initialization, and migrations.
- `src/entities/`: Database entity definitions.
- `src/routes/`: Express route handlers.
- `src/services/`: Application services (e.g., backup service).
- `src/scripts/`: Utility scripts.
- `backups/`: Directory where database backups are stored.

## License

This project is licensed under the ISC License.
