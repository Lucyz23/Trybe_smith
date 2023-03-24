import { sign } from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'SeuSegredoAqui';

const createToken = (userId: number, username: string): string => sign({
  id: userId, username,
}, secret, {
  algorithm: 'HS256',
  expiresIn: '1d',
});

export default {
  createToken,
};