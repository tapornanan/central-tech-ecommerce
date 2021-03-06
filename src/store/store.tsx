import React, { createContext, useReducer, useEffect } from 'react';

import { fetchProducts } from '../services/product.service';
import {
  addToCart,
  clearCart,
  getCart,
  removeCartItem,
  updateCartQuantity,
} from '../services/cart.service';
import { ICart } from '../interfaces/cart.interface';
import { IProduct } from '../interfaces/product.interface';
import { Actions, ActionType, SetCart, SetColors, SetProducts } from './action';

interface IStoreState {
  cart: ICart | null;
  products: IProduct[];
  colors: string[];
  isEditCart: boolean;
  cartDetail: IProduct | null;
}

interface IAppContext {
  state: IStoreState;
  dispatch: React.Dispatch<Actions>;
}

const initialState: IStoreState = {
  cart: null,
  products: [],
  colors: [],
  isEditCart: false,
  cartDetail: null,
};

export const store = createContext<IAppContext>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: IStoreState, action: Actions) => {
  switch (action.type) {
    case ActionType.SetCart:
      return {
        ...state,
        cart: action.payload,
      };
    case ActionType.SetColors:
      return {
        ...state,
        colors: action.payload,
      };
    case ActionType.AddToCart:
      return {
        ...state,
        cart: addToCart(action.payload),
      };
    case ActionType.SetProducts:
      return {
        ...state,
        products: action.payload,
      };
    case ActionType.OpenEditCart:
      return {
        ...state,
        isEditCart: true,
        cartDetail: action.payload,
      };
    case ActionType.CloseEditCart:
      return {
        ...state,
        isEditCart: false,
        cartDetail: null,
      };
    case ActionType.UpdateCartQuantity:
      return {
        ...state,
        cart: updateCartQuantity(action.payload.id, action.payload.quantity),
      };
    case ActionType.RemoveCartItem:
      return {
        ...state,
        cart: removeCartItem(action.payload.id),
      };
    case ActionType.ClearShoppingCart:
      return {
        ...state,
        cart: clearCart(),
      };
    default:
      return state;
  }
};

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchProducts().then((products) => {
      const colors = products
        .map((product) => product.color)
        .filter((value, index, self) => self.indexOf(value) === index);
      dispatch(SetProducts(products) as any);
      dispatch(SetColors(colors) as any);
    });
  }, []);

  useEffect(() => {
    const cart = getCart();
    dispatch(SetCart(cart) as any);
  }, []);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};
