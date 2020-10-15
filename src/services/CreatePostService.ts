import { Post } from '../interfaces/post';
import PostRepository from '../repositories/post';

class CreatePostService {
  constructor(private postRepository: PostRepository) {}

  public async execute(post: Post) {
    return await this.postRepository.store(post);
  }
}

export default CreatePostService;
