import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Product from '../product';
import { useAppContext } from '../context/AppContext';

const StyledGrid = styled(Grid)`
  margin-top: 70px;
`;

const Products = () => {
  const { products } = useAppContext();

  const content = products.map(product => <Product product={product} key={product.id} />);

  return (
    <StyledGrid container spacing={3}>
      {content}
    </StyledGrid>
  );
};

export default Products;
