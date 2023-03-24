import ordersModels from '../models/orderM';
import { AllOrders } from '../interfaces';

const get = async (): Promise<AllOrders[]> => {
  const allProducts: AllOrders[] = await ordersModels.get();
  return allProducts;
};

export default {
  get,
};