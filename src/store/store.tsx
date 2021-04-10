import { addToCart, getCart } from '@/services/cart.service';
import React, { createContext, useReducer, useEffect } from 'react';

import { fetchProducts } from '@/services/product.service';
import { ICart } from '../interfaces/cart.interface';
import { IProduct } from '../interfaces/product.interface';
import { Actions, ActionType, SetCart, SetColors, SetProducts } from './action';

interface IStoreState {
  cart: ICart | null;
  products: IProduct[];
  colors: string[];
}

interface IAppContext {
  state: IStoreState;
  dispatch: React.Dispatch<Actions>;
}

const initialState: IStoreState = {
  cart: null,
  products: [],
  colors: [],
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
    default:
      return state;
  }
};

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
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
