import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import { useCartContext } from '../context/CartContext';
import Product from '../product';
import { Typography } from '@mui/material';

const StyledGrid = styled(Grid)`
  margin-top: 70px;
`;

const FilledCart = () => {
  const { cart, cartTotal } = useCartContext();
  return (
    <StyledGrid container spacing={3}>
      {cart.map(item => (
        <Product product={item} from="cart" key={item.id} />
      ))}
      <Grid item xs={12}>
        <Typography variant="body1">Total:</Typography>
        <Typography variant="body2">{cartTotal}</Typography>
      </Grid>
    </StyledGrid>
  );
};

export default FilledCart;
