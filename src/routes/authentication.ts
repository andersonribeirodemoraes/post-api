import { Router } from 'express';
import AutheticationController from '../controllers/authentication';

import validateAuthentication from '../validators/Authentication';

const autheticationRouter = Router();

const autheticationController = new AutheticationController();

autheticationRouter.post(
  '/',
  validateAuthentication,
  autheticationController.login,
);

export default autheticationRouter;
