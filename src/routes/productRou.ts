import { Router } from 'express';
import productsControllers from '../controller/product';
import productsMiddleware from '../middleware/productsVa';

const router = Router();

router.post(
  '/',
  productsMiddleware.veriA,
  productsMiddleware.veriAmType,
  productsMiddleware.veriAmLeng,
  productsMiddleware.veriName,
  productsMiddleware.veriNameTy,
  productsMiddleware.veriNameLeng,
  productsControllers.insertP,
);

router.get('/', productsControllers.getPro);

export default router;