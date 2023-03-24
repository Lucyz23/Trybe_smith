import { Router } from 'express';
import usersControllers from '../controller/user';
import usersMiddleware from '../middleware/userVa';

const router = Router();

router.post(
  '/',
  usersMiddleware.veriUserName,
  usersMiddleware.veriUseNameType,
  usersMiddleware.veriUseNameLeng,
  usersMiddleware.veriVocation,
  usersMiddleware.veriVoTy,
  usersMiddleware.veriVoLeng,
  usersMiddleware.veriLevel,
  usersMiddleware.veriLevelTy,
  usersMiddleware.veriLevelLeng,
  usersMiddleware.veriPassword,
  usersMiddleware.veriPasswordTy,
  usersMiddleware.veriPasswordLeng,
  usersControllers.insertU,
);

export default router;