import React, { useContext } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { store } from '@/store/store';
import Link from 'next/link';
import ProductEditModal from '@/components/ProductEditModal';
import { IProduct } from '@/interfaces/product.interface';
import { numberFormat } from '@/utils/number-format';
import {
  OpenEditCart,
  RemoveCartItem,
  ClearShoppingCart,
} from '../store/action';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContext(store);

  const handleEditCart = (product: IProduct) => {
    dispatch(OpenEditCart(product) as any);
  };

  const handleRemoveItem = (product: IProduct) => {
    if (
      // eslint-disable-next-line no-alert
      window.confirm(
        `Are you sure you wanted to remove: ${product.name} form shopping cart?`,
      )
    ) {
      dispatch(RemoveCartItem(product.id) as any);
    }
  };

  const handleCheckout = () => {
    dispatch(ClearShoppingCart() as any);
  };

  return (
    <MainLayout>
      <Head>
        <title>Central e-commerce | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
        <div className="table-responsive">
          <table className="table cart">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th className="text-left">Product name</th>
                <th>@Qty</th>
                <th className="text-right">Item price</th>
                <th className="text-right">Total price</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart?.products.length === 0 ? (
                <tr>
                  <td colSpan={7}>
                    <p className="text-center">
                      You have no product in shopping cart.
                    </p>
                  </td>
                </tr>
              ) : null}
              {cart?.products.map((product, index) => (
                <tr key={product.id}>
                  <td className="text-center">{index + 1}</td>
                  <th>
                    <img className="product-image" src={product.image} alt="" />
                  </th>
                  <td>
                    <strong>{product.name}</strong>
                    <br />
                    <span className="text-italic">{product.color}</span>
                  </td>
                  <td className="text-center">{product.quantity}</td>
                  <td className="text-right">{numberFormat(product.price)}</td>
                  <td className="text-right">
                    {numberFormat((product.quantity || 0) * product.price)}
                  </td>
                  <td className="text-right">
                    <button
                      className="button warning"
                      type="button"
                      onClick={() => handleEditCart(product)}
                    >
                      ✏️
                    </button>
                    <button
                      className="button danger"
                      type="button"
                      onClick={() => handleRemoveItem(product)}
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4} className="text-right">
                  Total Tax
                </td>
                <td colSpan={3} className="text-right">
                  {numberFormat(cart?.tax || 0)}
                </td>
              </tr>
              <tr>
                <td colSpan={4} className="text-right">
                  Total Price Incl.
                </td>
                <td colSpan={3} className="text-right">
                  {numberFormat(cart?.total || 0)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className="text-right">
        <Link href="/thankyou">
          <button
            className="button primary checkout"
            onClick={handleCheckout}
            type="button"
            disabled={cart?.products.length === 0}
          >
            Checkout
          </button>
        </Link>
      </div>
      <ProductEditModal />
    </MainLayout>
  );
};

export default Cart;
