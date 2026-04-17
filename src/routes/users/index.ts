import { Router } from 'express';
import { getUsers } from './getUsers.ts';

const router = Router();

router.get('/', getUsers);

export default router;
