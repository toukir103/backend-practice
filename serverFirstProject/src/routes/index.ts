import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.route';

const router = Router();

router.use('/users', UserRoutes);

export default router;
