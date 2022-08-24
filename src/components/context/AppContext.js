import React, { useState, useContext, createContext, useMemo } from 'react';

const AppContext = createContext({
  products: [],
  setProducts: () => {},
});

const AppContextProvider = React.memo(({ children }) => {
  const [products, setProducts] = useState([]);

  const context = useMemo(
    () => ({
      products,
      setProducts,
    }),
    [products, setProducts]
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
});

const useAppContext = () => useContext(AppContext);

export { AppContext, AppContextProvider, useAppContext };
