import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../cart/FilledCart';
import { AppContext } from '../context/AppContext';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Routes from '../../routes';

describe('test FilledCart', () => {
  it('render the Filled Cart Component properly', async () => {
    await act(async () => {
      render(
        <CartContext.Provider
          value={{
            cart: [
              {
                id: 1,
                title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                price: 109.95,
                description:
                  'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                category: "men's clothing",
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                rating: {
                  rate: 3.9,
                  count: 120,
                },
              },
            ],
            cartTotal: 90,
          }}
        >
          <Cart />
        </CartContext.Provider>,
        { wrapper: BrowserRouter }
      );
    });
  });
});
