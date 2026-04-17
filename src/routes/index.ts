import { Router } from 'express';
import userRoutes from './users/index.ts';

const usersRouter = Router();
usersRouter.use('/users', userRoutes);

export { usersRouter };
