import React, { useContext, useState, useEffect } from 'react';

import { store } from '@/store/store';
import { IProduct } from '@/interfaces/product.interface';
import { CloseEditCart, UpdateCartQuantity } from '../store/action';

const ProductEditModal = () => {
  const {
    state: { cartDetail, isEditCart },
    dispatch,
  } = useContext(store);

  const [newQuantity, setNewQuantity] = useState(1);

  useEffect(() => {
    setNewQuantity(cartDetail?.quantity || 1);
  }, [cartDetail?.quantity]);

  const handleCloseEditCart = () => {
    dispatch(CloseEditCart() as any);
  };

  const handleChangeQuantity = (quantity: number) => {
    const update = newQuantity + quantity;
    if (update < 1) {
      return;
    }
    setNewQuantity(update);
  };

  const handleUpdateQuantity = () => {
    if (cartDetail) {
      dispatch(
        UpdateCartQuantity({ id: cartDetail.id, quantity: newQuantity }) as any,
      );
      handleCloseEditCart();
    }
  };

  return (
    <>
      {isEditCart ? (
        <div className="modal">
          <div className="inner-modal">
            <button
              className="close-modal"
              type="button"
              onClick={handleCloseEditCart}
            >
              ❌
            </button>
            <img src={cartDetail?.image} alt={cartDetail?.name} />
            <h4 className="product-name text-center">{cartDetail?.name}</h4>
            <div className="quantity-modifier-wrapper">
              <button
                className="button danger"
                type="button"
                onClick={() => handleChangeQuantity(-1)}
              >
                ⬇️
              </button>
              <input
                type="number"
                className="quantity-input"
                value={newQuantity}
                min={1}
                onChange={(e) => setNewQuantity(+e.target.value)}
              />
              <button
                className="button success"
                type="button"
                onClick={() => handleChangeQuantity(1)}
              >
                ⬆️
              </button>
            </div>
            <button
              className="button primary"
              type="button"
              onClick={handleUpdateQuantity}
            >
              Save change
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductEditModal;
