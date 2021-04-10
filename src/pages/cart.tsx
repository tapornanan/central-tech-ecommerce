import React, { useContext } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import { store } from '@/store/store';

const Cart = () => {
  const {
    state: { cart },
  } = useContext(store);
  return (
    <MainLayout>
      <Head>
        <title>Cental e-commerce | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <table className="table">
        <tr>
          <th>#</th>
          <th>Product name</th>
          <th>@Qty</th>
          <th>Item price</th>
          <th>Total price</th>
        </tr>
      </table>
    </MainLayout>
  );
};

export default Cart;
