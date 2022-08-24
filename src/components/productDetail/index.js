import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const StyledGridContainer = styled(Grid)`
  margin-top: 70px;
`;

const ProductDetail = () => {
  const { setCart, cart } = useCartContext();
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/' + productId)
      .then(res => res.json())
      .then(json => {
        setProductDetails(json);
      });
  }, []);

  if (!productDetails) return <div style={{ marginTop: 70 }}>Loading...</div>;

  const addToCart = () => {
    setCart(cart => [...cart, { ...productDetails, quantity: 1 }]);
  };

  const { title, description, price, image, category } = productDetails;

  const isDisabled = cart.length > 0 && cart.findIndex(item => item.id === +productId) !== -1;

  return (
    productDetails && (
      <StyledGridContainer container>
        <Grid item xs={12}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">{category}</Typography>
        </Grid>
        <Grid item xs={12}>
          <img src={image} alt={image} height={400} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2">{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">{price}$</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={addToCart} disabled={isDisabled}>
            Add to Cart
          </Button>
        </Grid>
      </StyledGridContainer>
    )
  );
};

export default ProductDetail;
