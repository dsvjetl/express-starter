# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-04-17

### Added
- **Express Server**: Set up basic Express application with ESM support.
- **TypeScript Integration**: Full TypeScript support with `tsx` for development and `esbuild` for production builds.
- **TypeORM & SQLite**: Integrated TypeORM for database management using SQLite.
- **Database Migrations**: Configured TypeORM migrations for database schema versioning.
- **Database Seeding**: Automatic seeding of initial users if the database is empty.
- **Backup Service**: Implemented a database backup service that:
  - Creates timestamped `.sqlite` backups.
  - Automatically cleans up backups older than the last 7 copies.
  - Can be triggered manually via `npm run db:backup`.
- **User Routes**: Basic REST API endpoint `GET /users` to retrieve all users.
- **Linting & Formatting**: Configured ESLint and Prettier for code quality and consistency.
- **Cron Jobs Ready**: `node-cron` dependency included for future scheduled tasks.
