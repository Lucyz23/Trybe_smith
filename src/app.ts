import express from 'express';
import productRouter from './routes/productRou';
import userRou from './routes/userRou';
import orderRouter from './routes/orderRou';
import login from './routes/loginRou';

const app = express();

app.use(express.json());

app.use('/products', productRouter);

app.use('/users', userRou);

app.use('/orders', orderRouter);

app.use('/login', login);

export default app;
