import { Request, Response } from 'express';
import { AllProducts, Product } from '../interfaces';
import productsServices from '../service/productsService';

const insertP = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const productId: number = await productsServices.insertP({ name, amount });
  const result: Product = { id: productId, name, amount };
  return res.status(201).json(result);
};

const getPro = async (_req: Request, res: Response) => {
  const result: AllProducts = await productsServices.getPro();
  return res.status(200).json(result);
};

export default {
  insertP,
  getPro,
};