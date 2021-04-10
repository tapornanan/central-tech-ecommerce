import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import Lottie from 'lottie-react';
import Link from 'next/link';
import ThankYou from '../utils/thank.json';

const Checkout = () => (
  <MainLayout>
    <Head>
      <title>Cental e-commerce | Cart</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="card">
      <h2 className="text-center">Thank You</h2>
      <p className="text-center">
        Thank you for purchasing our product. Your support and trust in us are
        much appreciated.
      </p>

      <div className="thankyou-wrapper">
        <Lottie animationData={ThankYou} loop={false} />
      </div>

      <div className="text-center">
        <Link href="/">
          <button className="button primary" type="button">
            Order more
          </button>
        </Link>
      </div>
    </div>
  </MainLayout>
);

export default Checkout;
