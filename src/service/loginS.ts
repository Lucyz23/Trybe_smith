import loginModel from '../models/loginM';
import { NewLogin } from '../interfaces';
import auth from '../auth/authFunc';

const insert = async ({ username, password }: NewLogin): Promise<string> => {
  const result: number = await loginModel.insert({ username, password });
  if (result === 401) return 'Invalid';
  const token: string = auth.createToken(result, username);
  return token;
};

export default {
  insert,
};