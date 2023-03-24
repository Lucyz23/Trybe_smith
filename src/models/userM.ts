import { ResultSetHeader } from 'mysql2/promise';
import { NewUser } from '../interfaces';
import connection from './connection';

const insertU = async ({ username, vocation, level, password }: NewUser): Promise<number> => {
  const query = `INSERT INTO 
  Trybesmith.users (username, vocation, level, password)
  VALUES (?, ?, ?, ?)`;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [
    username, vocation, level, password,
  ]);
  return insertId as number;
};

export default {
  insertU,
};