import { IProduct } from '@/interfaces/product.interface';

export interface ICart {
  total: number;
  tax: number;
  products: IProduct[];
}
