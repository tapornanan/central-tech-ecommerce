import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import { useContext, useEffect, useState } from 'react';

import ProductCard from '@/components/ProductCard';
import Search from '@/components/Search';
import { store } from '@/store/store';
import { IProduct } from '../interfaces/product.interface';

export default function Home() {
  const {
    state: { products },
  } = useContext(store);
  const [localProducts, setLocalProducts] = useState([] as IProduct[]);

  useEffect(() => {
    setLocalProducts(products);
  }, [products]);

  const handleFilter = (query: string, color: string, size: string) => {
    let result = [...products];
    if (query) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    if (color) {
      result = result.filter((product) => product.color === color);
    }
    if (size) {
      const [begin, end] = size.split(`-`);
      result = result.filter(
        (product) => product.size < +end && product.size > +begin,
      );
    }
    setLocalProducts(result);
  };

  return (
    <MainLayout>
      <Head>
        <title>Central e-commerce</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search
        handleFilter={({ query, color, size }) =>
          handleFilter(query, color, size)
        }
      />

      <div className="product-wrapper">
        {localProducts.length > 0
          ? localProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </MainLayout>
  );
}
