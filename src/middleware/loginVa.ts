import { Request, Response, NextFunction } from 'express';

const veriUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"username" is required' });
  return next();
};

const veriPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"password" is required' });
  return next();
};

export default {
  veriUserName,
  veriPassword,
};