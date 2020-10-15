import { Request, Response } from 'express';
import UserRepository from '../repositories/user';
import CreateUserService from '../services/CreateUserService';

const userRepository = new UserRepository();

class UserController {
  async store(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const createUserService = new CreateUserService(userRepository);

      await createUserService.execute({ email, password });

      return response.send('Usuário criado com sucesso!');
    } catch (err) {
      return response.status(500).json({ error: 'Erro no servidor!' });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const users = await userRepository.show();

    return response.json(users);
  }
}

export default UserController;
