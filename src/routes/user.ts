import { Router } from 'express';
import UserController from '../controllers/user';

import validateCreateUser from '../validators/CreateUser';

const userRouter = Router();

const userController = new UserController();

userRouter.post('/', validateCreateUser, userController.store);
userRouter.get('/', userController.show);

export default userRouter;
