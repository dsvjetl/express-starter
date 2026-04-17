import 'reflect-metadata';
import express from 'express';
import { usersRouter } from './routes/index.ts';
import { initializeDatabase } from './db/init.ts';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', usersRouter);

initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to initialize database:', err);
  });

export { app };
