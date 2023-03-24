import { Response, Request } from 'express';
import ordersServices from '../service/orderS';
import { AllOrders } from '../interfaces';

const get = async (_req: Request, res: Response) => {
  const result: AllOrders[] = await ordersServices.get();
  return res.status(200).json(result);
};

export default {
  get,
};