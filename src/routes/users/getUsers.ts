import type { Request, Response } from 'express';
import { AppDataSource } from '../../db/data-source.ts';
import { User } from '../../entities/User.ts';

export const getUsers = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  res.json(users);
};
