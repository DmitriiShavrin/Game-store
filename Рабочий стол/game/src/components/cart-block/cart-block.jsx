import React, { useState, useCallback  } from 'react';
import { useSelector } from 'react-redux';
import './cart-block.css';
import { BiCartAlt } from 'react-icons/bi';
import CartMenu from '../cart-menu/cart-menu';
import { calcTotalPrice } from '../utils';
import ItemsInCart from '../items-in-cart/items-in-cart';
import { useNavigate } from "react-router-dom";

const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const history = useNavigate();
  const totalPrice = calcTotalPrice(items);
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push('/order');
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <BiCartAlt
        color="white"
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} руб.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />}
    </div>
  );
}

export default CartBlock