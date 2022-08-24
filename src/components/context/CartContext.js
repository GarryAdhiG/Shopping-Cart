import React, { useState, useContext, createContext, useMemo, useEffect } from 'react';

const CartContext = createContext({
  cart: [],
  setCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
  cartTotal: 0,
  setCartTotal: () => {},
});

const CartContextProvider = React.memo(({ children }) => {
  const cartData = JSON.parse(localStorage.getItem('cart'));
  const [cart, setCart] = useState(cartData?.length ? cartData : []);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      setCartTotal(
        cart.reduce((acc, item) => {
          return acc + item.quantity * item.price;
        }, 0)
      );
      setCartCount(
        cart.reduce((acc, item) => {
          return acc + item.quantity;
        }, 0)
      );
    }

    if (cart.length === 0) {
      setCartCount(0);
      setCartTotal(0);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const context = useMemo(
    () => ({
      cart,
      cartCount,
      cartTotal,
      setCart,
      setCartCount,
      setCartTotal,
    }),
    [cart, cartCount, cartTotal, setCart, setCartCount, setCartTotal]
  );

  return <CartContext.Provider value={context}>{children}</CartContext.Provider>;
});

const useCartContext = () => useContext(CartContext);

export { CartContext, CartContextProvider, useCartContext };
