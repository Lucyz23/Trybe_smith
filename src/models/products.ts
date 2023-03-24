import { RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { NewProducts, AllProducts } from '../interfaces';

const insertP = async ({ name, amount }: NewProducts): Promise<number> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId as number;
};

const getPro = async (): Promise<AllProducts> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<RowDataPacket[] & AllProducts>(query);
  return result;
};

export default {
  insertP,
  getPro,
};