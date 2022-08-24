import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const StyledGrid = styled(Grid)`
  margin-top: 70px;
`;

const EmptyCart = () => {
  return (
    <StyledGrid container>
      <Grid item xs={12}>
        <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
      </Grid>
    </StyledGrid>
  );
};

export default EmptyCart;
