import { Request, Response, NextFunction } from 'express';

const veriUserName = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  return next();
};

const veriUseNameType = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body;
  if (typeof username !== 'string') { 
    return res.status(422).json({ message: '"username" must be a string' });
  }
  return next();
};

const veriUseNameLeng = (req: Request, res: Response, next: NextFunction) => { 
  const { username } = req.body;
  if (username.length < 3) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  return next();
};

const veriVocation = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  return next();
};

const veriVoTy = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  return next();
};

const veriVoLeng = (req: Request, res: Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (vocation.length < 3) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  return next();
};

const veriLevel = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
  return next();
};
  
const veriLevelTy = (req: Request, res: Response, next: NextFunction) => {
  const { level } = req.body;
  if (typeof level !== 'number') { 
    return res.status(422).json({ message: '"level" must be a number' });
  }
  return next();
};
  
const veriLevelLeng = (req: Request, res: Response, next: NextFunction) => { 
  const { level } = req.body;
  if (level <= 1) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }
  return next();
};

const veriPassword = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
};

const veriPasswordTy = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (typeof password !== 'string') { 
    return res.status(422).json({ message: '"password" must be a string' });
  }
  return next();
};

const veriPasswordLeng = (req: Request, res: Response, next: NextFunction) => { 
  const { password } = req.body;
  if (password.length < 8) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  return next();
};

export default {
  veriUserName,
  veriUseNameType,
  veriUseNameLeng,
  veriVocation,
  veriVoTy,
  veriVoLeng,
  veriLevel,
  veriLevelTy,
  veriLevelLeng,
  veriPassword,
  veriPasswordTy,
  veriPasswordLeng,
};