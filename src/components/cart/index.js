import React from 'react';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
  const { cartCount } = useCartContext();
  return cartCount === 0 ? <EmptyCart /> : <FilledCart />;
};

export default Cart;
