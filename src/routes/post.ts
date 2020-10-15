import { Router } from 'express';
import PostController from '../controllers/post';

import authenticated from '../middlewares/authenticated';
import validateCreatePost from '../validators/CreatePost';

const postRouter = Router();
postRouter.use(authenticated);

const postController = new PostController();

postRouter.post('/', validateCreatePost, postController.store);
postRouter.get('/', postController.show);

export default postRouter;
