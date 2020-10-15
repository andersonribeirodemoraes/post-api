import { Request, Response } from 'express';
import UserRepository from '../repositories/user';
import AuthenticationService from '../services/AuthenticationService';

const userRepository = new UserRepository();

class AuthenticationController {
  async login(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    try {
      const authenticationService = new AuthenticationService(userRepository);

      const user = await authenticationService.execute({ email, password });

      return response.json(user);
    } catch (err) {
      return response
        .status(err.statusCode || 500)
        .json({ error: err.message || 'Erro no servidor!' });
    }
  }
}

export default AuthenticationController;
