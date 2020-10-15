import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

//const swaggerDocument = require('../config/swagger.json');

import authenticationRouter from './authentication';
import userRouter from './user';
import postRouter from './post';

const routes = Router();

//routes.use('/api-docs', swaggerUi.serve);
//routes.get('/api-docs', swaggerUi.setup(swaggerDocument));

routes.use('/login', authenticationRouter);
routes.use('/user', userRouter);
routes.use('/post', postRouter);

export default routes;
