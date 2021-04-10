import React, { useContext } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { store } from '@/store/store';
import Link from 'next/link';
import ProductEditModal from '@/components/ProductEditModal';
import { IProduct } from '@/interfaces/product.interface';
import { OpenEditCart, RemoveCartItem } from '../store/action';

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

  return (
    <MainLayout>
      <Head>
        <title>Cental e-commerce | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
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
            {cart?.products.map((product, index) => (
              <tr key={product.id}>
                <td className="text-center">{index + 1}</td>
                <th>
                  <img className="product-image" src={product.image} alt="" />
                </th>
                <td>
                  <strong>{product.name}</strong>
                </td>
                <td className="text-center">{product.quantity}</td>
                <td className="text-right">{product.price}</td>
                <td className="text-right">
                  {(product.quantity || 0) * product.price}
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
                {cart?.tax.toFixed(2)}
              </td>
            </tr>
            <tr>
              <td colSpan={4} className="text-right">
                Total Price Incl.
              </td>
              <td colSpan={3} className="text-right">
                {cart?.total.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="text-right">
        <Link href="/checkout">
          <button className="button primary" type="button">
            Checkout
          </button>
        </Link>
      </div>
      <ProductEditModal />
    </MainLayout>
  );
};

export default Cart;
