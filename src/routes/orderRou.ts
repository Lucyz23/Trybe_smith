import { Router } from 'express';
import ordersControllers from '../controller/order';

const router = Router();

router.get('/', ordersControllers.get);

export default router;