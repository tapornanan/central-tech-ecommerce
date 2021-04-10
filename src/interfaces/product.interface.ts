export interface IProduct {
  id: number;
  createdAt: Date;
  name: string;
  color: string;
  department: string;
  price: number;
  image: string;
  size: number;
  quantity?: number;
}
