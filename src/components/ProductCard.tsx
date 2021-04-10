import { store } from '@/store/store';
import React, { useContext } from 'react';
import { IProduct } from '../interfaces/product.interface';
import { AddToCart } from '../store/action';

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { dispatch } = useContext(store);

  const handleAddProduct = (productData: IProduct) => {
    dispatch(AddToCart(productData) as any);
  };

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt={product.name} />
      <h4 className="product-name">{product.name}</h4>
      <div className="product-department">{product.department}</div>
      <div className="product-color">{product.color}</div>
      <div className="product-price">฿{product.price}</div>
      <button
        className="button primary block"
        type="button"
        onClick={() => handleAddProduct(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
