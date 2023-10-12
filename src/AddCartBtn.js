import React, { useContext, useState, useEffect } from 'react';
import AddCartBtnCss from './AddCartBtn.module.css';
import { CartContext } from './CartContext';

export default function AddCartBtn({ bikeInfo }) {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [buttonText, setButtonText] = useState(() => {
    // Initialize buttonText based on whether the bike is in cartItems
    return cartItems.some((bike) => bike.id === bikeInfo.id) ? 'In Cart' : 'Add To Cart';
  });

  useEffect(() => {
    // Update buttonText whenever cartItems change
    if (cartItems.some((bike) => bike.id === bikeInfo.id)) {
      setButtonText('In Cart');
    } else {
      setButtonText('Add To Cart');
    }
  }, [cartItems, bikeInfo.id]);

  function handleAdd() {
    if (!cartItems.some((bike) => bike.id === bikeInfo.id)) {
      setCartItems([
        {
          id: bikeInfo.id,
          name: bikeInfo.name,
          img: bikeInfo.img,
          brand: bikeInfo.brand,
          size: bikeInfo.size,
        },
        ...cartItems,
      ]);
    }
  }

  return (
    <button className={AddCartBtnCss.addCartBtn} onClick={handleAdd}>
      {buttonText}
    </button>
  );
}
