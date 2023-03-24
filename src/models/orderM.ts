import { RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { AllOrders } from '../interfaces';

const get = async (): Promise<AllOrders[]> => {
  const query = `SELECT 
  o.id,
  o.user_id AS userId,
  JSON_ARRAYAGG(p.id) AS productsIds
FROM
  Trybesmith.orders AS o
      INNER JOIN
  Trybesmith.products AS p
WHERE
  o.id = p.order_id GROUP BY o.id;`;
  const [result] = await connection.execute<RowDataPacket[] & AllOrders[]>(query);
  return result;
};

export default {
  get,
};