export interface ICart {
  customer: string;
  products: ICartProduct[];
}

export interface ICartProduct {
  productId: number;
  quantity: number;
}

export interface IUser {
  username: string;
  fullName: string;
  roles?: string[];
}

export class User {
  constructor(public username: string,
              public fullName: string,
              public roles: string[]) {
  }
}

export interface ILogUser {
  username: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image?: string;
  description?: string;
}
