import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { useAppContext } from './components/context/AppContext';
import Routes from './routes';

import NavBar from './components/navbar';

function App() {
  const { setProducts } = useAppContext();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
      });
  }, []);

  return (
    <Grid container>
      <BrowserRouter>
        <StyledEngineProvider injectFirst>
          <NavBar />
        </StyledEngineProvider>
        <Routes />
      </BrowserRouter>
    </Grid>
  );
}

export default App;
