import { IProduct } from '@/interfaces/product.interface';
import { ICart } from '../interfaces/cart.interface';

// eslint-disable-next-line no-shadow
export enum ActionType {
  SetCart = `SET_CART`,
  AddToCart = `ADD_TO_CART`,
  SetProducts = `SET_PRODUCTS`,
  SetColors = `SET_COLORS`,
  OpenEditCart = `OPEN_EDIT_CART`,
  CloseEditCart = `CLOSE_EDIT_CART`,
  UpdateCartQuantity = `UPDATE_CART_QUANTITY`,
  RemoveCartItem = `REMOVE_CART_ITEM`,
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

interface IOpenEditCart {
  type: ActionType.OpenEditCart;
  payload: IProduct;
}

interface ICloseEditCart {
  type: ActionType.CloseEditCart;
}

interface IUpdateCartQuantity {
  type: ActionType.UpdateCartQuantity;
  payload: {
    id: number;
    quantity: number;
  };
}

interface IRemoveCartItem {
  type: ActionType.RemoveCartItem;
  payload: {
    id: number;
  };
}

export type Actions =
  | IAddToCart
  | ISetProducts
  | ISetCart
  | ISetColors
  | IOpenEditCart
  | ICloseEditCart
  | IUpdateCartQuantity
  | IRemoveCartItem;

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

export const OpenEditCart = (product: IProduct) => ({
  type: ActionType.OpenEditCart,
  payload: product,
});

export const CloseEditCart = () => ({
  type: ActionType.CloseEditCart,
});

export const UpdateCartQuantity = ({
  id,
  quantity,
}: {
  id: number;
  quantity: number;
}) => ({
  type: ActionType.UpdateCartQuantity,
  payload: {
    id,
    quantity,
  },
});

export const RemoveCartItem = (id: number) => ({
  type: ActionType.RemoveCartItem,
  payload: {
    id,
  },
});
