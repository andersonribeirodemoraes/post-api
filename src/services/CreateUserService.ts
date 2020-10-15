import { hash } from 'bcryptjs';
import UserRepository from '../repositories/user';
import { User } from '../interfaces/user';

class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute(user: User) {
    const { email, password } = user;

    const userFinded = await this.userRepository.index(email);

    if (userFinded) throw new Error('Já existe um usuário com esse email');

    const hashedPassword = await hash(password, 8);

    return await this.userRepository.store({
      email,
      password: hashedPassword,
    });
  }
}

export default CreateUserService;
