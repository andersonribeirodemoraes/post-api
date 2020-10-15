import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from '../interfaces/user';
import UserRepository from '../repositories/user';
import authenticationConfig from '../config/authentication';

interface Reposnse {
  token: string;
}

class AuthenticationService {
  constructor(private userRepository: UserRepository) {}

  public async execute(user: User): Promise<Reposnse> {
    const { email, password } = user;

    const userFinded = await this.userRepository.index(email);

    if (!userFinded) throw new Error('Email não encontrado');

    const passwordMatched = await compare(password, userFinded.password);

    if (!passwordMatched) throw new Error('Senha incorreta');

    const token = sign(
      { userId: userFinded.id },
      authenticationConfig.jwt.secret,
      {
        expiresIn: authenticationConfig.jwt.expiresIn,
      },
    );

    return { token };
  }
}

export default AuthenticationService;
