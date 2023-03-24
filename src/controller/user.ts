import usersModels from '../models/userM';
import { NewUser } from '../interfaces/index';
import auth from '../auth/authFunc';

const insertU = async ({ username, vocation, level, password }: NewUser): Promise<string> => {
  const userId: number = await usersModels.insertU({ username, vocation, level, password });
  const token: string = auth.createToken(userId, username);
  return token;
};

export default {
  insertU,
};