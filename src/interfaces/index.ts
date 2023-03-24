export interface NewProducts {
  name: string;
  amount: string;
}

export interface Product {
  id: number;
  name: string;
  amount: string;
}

export interface AllProducts {
  id: number;
  name: string;
  amount: string;
  orderId: number;
}

export interface NewUser {
  username: string;
  vocation: string;
  level: number;
  password: string; 
}

export interface AllOrders {
  id: number;
  userId: number;
  productsIds: number[];
}

export interface NewLogin {
  username: string,
  password: string,
}