import { IProduct } from '@/interfaces/product.interface';
import { ICart } from '../interfaces/cart.interface';

// eslint-disable-next-line no-shadow
export enum ActionType {
  SetCart = `SET_CART`,
  AddToCart = `ADD_TO_CART`,
  SetProducts = `SET_PRODUCTS`,
  SetColors = `SET_COLORS`,
}

interface ISetCart {
  type: ActionType.SetCart;
  payload: ICart;
}

interface ISetColors {
  type: ActionType.SetColors;
  payload: string[];
}

interface IAddToCart {
  type: ActionType.AddToCart;
  payload: IProduct;
}

interface ISetProducts {
  type: ActionType.SetProducts;
  payload: IProduct[];
}

export type Actions = IAddToCart | ISetProducts | ISetCart | ISetColors;

export const SetCart = (cart: ICart) => ({
  type: ActionType.SetCart,
  payload: cart,
});

export const SetColors = (colors: string[]) => ({
  type: ActionType.SetColors,
  payload: colors,
});

export const AddToCart = (product: IProduct) => ({
  type: ActionType.AddToCart,
  payload: product,
});

export const SetProducts = (products: IProduct[]) => ({
  type: ActionType.SetProducts,
  payload: products,
});
