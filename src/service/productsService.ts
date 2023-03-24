import { NewProducts, AllProducts } from '../interfaces';
import productsModels from '../models/products';

const insertP = async ({ name, amount }: NewProducts): Promise<number> => {
  const productsId: number = await productsModels.insertP({ name, amount });
  return productsId;
};

const getPro = async (): Promise<AllProducts> => {
  const allProducts: AllProducts = await productsModels.getPro();
  return allProducts;
};

export default {
  insertP,
  getPro,
};