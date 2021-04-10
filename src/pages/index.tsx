import Head from 'next/head';
import MainLayout from '@/layouts/MainLayout';
import { useEffect, useState } from 'react';
import { fetchProducts } from '@/services/product.service';
import { IProduct } from '@/interfaces/product.interface';
import ProductCard from '@/components/ProductCard';
import Search from '@/components/Search';

export default function Home() {
  // store original array.
  const [originalProducts, setOriginalProducts] = useState([] as IProduct[]);
  // store filtered
  const [products, setProducts] = useState([] as IProduct[]);
  const [colors, setColors] = useState([] as string[]);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res);
      setOriginalProducts(res);
      const productColors = res
        .map((product) => product.color)
        .filter((value, index, self) => self.indexOf(value) === index);
      setColors(productColors);
    });
  }, []);

  const handleFilter = (query: string, color: string) => {
    let result = [...originalProducts];
    if (query) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
    }
    if (color) {
      result = result.filter((product) => product.color === color);
    }
    setProducts(result);
  };

  return (
    <MainLayout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Search
        handleFilter={({ query, color }) => handleFilter(query, color)}
        colors={colors}
      />

      <div className="product-wrapper">
        {products.length > 0
          ? products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : null}
      </div>
    </MainLayout>
  );
}
