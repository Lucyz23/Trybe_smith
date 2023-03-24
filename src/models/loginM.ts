import { RowDataPacket } from 'mysql2';
import { NewLogin } from '../interfaces';
import connection from './connection';

const insert = async ({ username, password }: NewLogin): Promise<number> => {
  const queryUsername = 'SELECT * FROM Trybesmith.users WHERE username = ?;';
  const queryPassword = 'SELECT * FROM Trybesmith.users WHERE password = ?;';
  const [[LoginUsername]] = await connection
    .execute<RowDataPacket[]>(queryUsername, [username]);
  
  const [[LoginPassword]] = await connection
    .execute<RowDataPacket[]>(queryPassword, [password]);
  
  if (!LoginUsername || !LoginPassword) {
    return 401;
  }
  return LoginUsername.id;
};

export default {
  insert,
};