import db from '../database/connection';
import { User } from '../interfaces/user';

class UserRepository {
  async store(user: User): Promise<any> {
    const { email, password } = user;
    return await db('users').insert({
      email,
      password,
    });
  }

  async show(): Promise<User[]> {
    return await db('users').where({});
  }

  async index(email: string): Promise<User> {
    return await db('users').where({ email }).first();
  }
}

export default UserRepository;
