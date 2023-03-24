import { Router } from 'express';
import loginControllers from '../controller/login';
import loginMiddleware from '../middleware/loginVa';

const router = Router();

router.post(
  '/',
  loginMiddleware.veriUserName,
  loginMiddleware.veriPassword,
  loginControllers.insert,
);

export default router;