import axios from 'axios';
import { IProduct } from '../interfaces/product.interface';

const fetchProducts = async (): Promise<IProduct[]> => {
  const { data } = await axios.get(
    `https://607113bd50aaea00172842ee.mockapi.io/api/products`,
  );
  return data;
};

export { fetchProducts };
