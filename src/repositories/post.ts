import db from '../database/connection';
import { Post } from '../interfaces/post';

class PostRepository {
  async store(post: Post) {
    const { title, description, url } = post;
    return await db('posts').insert({
      title,
      description,
      url,
    });
  }

  async show(): Promise<Post[]> {
    return await db('posts').where({});
  }
}

export default PostRepository;
