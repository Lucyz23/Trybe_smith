import { Request, Response } from 'express';
import loginService from '../service/loginS';

const insert = async (req: Request, res: Response) => {
  const result: string = await loginService.insert(req.body);
  if (result === 'Invalid') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json({ token: result });
};

export default {
  insert,
};