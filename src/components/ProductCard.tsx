import React, { useContext } from 'react';
import { useToasts } from 'react-toast-notifications';
import { numberFormat } from '../utils/number-format';
import { store } from '../store/store';
import { IProduct } from '../interfaces/product.interface';
import { AddToCart } from '../store/action';

interface IProductCard {
  product: IProduct;
}

const ProductCard: React.FC<IProductCard> = ({ product }) => {
  const { dispatch } = useContext(store);
  const { addToast } = useToasts();

  const handleAddProduct = (productData: IProduct) => {
    dispatch(AddToCart(productData) as any);
    addToast(`Added ${productData.name} to shopping cart.`, {
      appearance: `success`,
    });
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <h4 className="product-name">{product.name}</h4>
      <div className="product-department">{product.department}</div>
      <div className="product-size">{product.size}ml</div>
      <div className="product-color" style={{ backgroundColor: product.color }}>
        {product.color}
      </div>
      <div className="product-price">{numberFormat(product.price)}</div>
      <button
        className="button primary block product-button"
        type="button"
        onClick={() => handleAddProduct(product)}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
