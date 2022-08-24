import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const StyledCardHeader = styled(CardHeader)`
  span {
    font-size: 0.9rem;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  object-fit: contain;
`;

const Product = ({ product, from }) => {
  const navigate = useNavigate();
  const { setCart } = useCartContext();
  const { id, title, image, price, quantity } = product;

  const checkProductDetails = () => {
    navigate(`product/${id}`);
  };

  const removeFromCart = () => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const changeQuantity = operation => {
    setCart(cart =>
      cart.map(item => {
        if (item.id === id) {
          if (operation === 'inc') {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }

          if (operation === 'dec' && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }

        return item;
      })
    );
  };

  return (
    <Grid item xs={12} sm={6} lg={3} key={id}>
      <Card style={{ height: '100%' }}>
        <StyledCardHeader title={title} />
        <StyledCardMedia component="img" height="194" image={image} alt={title} />
        <CardContent>
          <Typography variant="body1" color="black">
            {price}$
          </Typography>
          {from === 'cart' && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Button type="button" size="medium" onClick={() => changeQuantity('dec')}>
                -
              </Button>
              <Typography>{quantity}</Typography>
              <Button type="button" size="medium" onClick={() => changeQuantity('inc')}>
                +
              </Button>
            </div>
          )}
        </CardContent>
        <CardActions disableSpacing>
          {from === 'cart' ? (
            <Button variant="outlined" color="warning" onClick={removeFromCart}>
              Remove from Cart
            </Button>
          ) : (
            <Button variant="outlined" onClick={checkProductDetails}>
              View Details
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Product;
