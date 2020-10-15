import { Request, Response } from 'express';
import PostRepository from '../repositories/post';
import CreatePostService from '../services/CreatePostService';

const postRepository = new PostRepository();

class PostController {
  async store(request: Request, response: Response): Promise<Response> {
    const { title, description, url } = request.body;

    try {
      const createPostService = new CreatePostService(postRepository);

      await createPostService.execute({ title, description, url });

      return response.send('Post criado com sucesso!');
    } catch (error) {
      return response.status(500).json({ error: 'Erro no servidor!' });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const posts = await postRepository.show();
    return response.json(posts);
  }
}

export default PostController;
