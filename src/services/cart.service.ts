/* eslint-disable no-param-reassign */
import { ICart } from '../interfaces/cart.interface';
import { IProduct } from '../interfaces/product.interface';

const defaultCart: ICart = {
  total: 0,
  tax: 0,
  products: [],
};

const getCart = (): ICart =>
  JSON.parse(localStorage.getItem(`CENTRAL_CART`) as string) || defaultCart;

const saveCart = (cart: ICart): ICart => {
  localStorage.setItem(`CENTRAL_CART`, JSON.stringify(cart));
  return cart;
};

const calculateTotal = (cart: ICart): ICart => {
  let totalExcl = 0;

  cart.products.forEach((product) => {
    totalExcl += product.quantity ? product.quantity * product.price : 0;
  });

  cart.tax = totalExcl * 0.07;
  // eslint-disable-next-line no-param-reassign
  cart.total = totalExcl + cart.tax;

  return cart;
};

const addToCart = (product: IProduct): ICart => {
  const cart = { ...getCart() };
  if (cart.products.length === 0) {
    cart.products.push({ ...product, quantity: 1 });
  } else {
    const updateProduct = cart.products.find((p) => p.id === product.id);
    if (updateProduct) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      updateProduct.quantity! += 1;
    } else {
      cart.products.push({ ...product, quantity: 1 });
    }
  }

  return saveCart(calculateTotal(cart));
};

export { getCart, saveCart, addToCart };
