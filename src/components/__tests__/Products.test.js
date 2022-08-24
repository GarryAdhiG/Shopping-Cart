import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from '../products';
import { AppContext } from '../context/AppContext';
import { BrowserRouter } from 'react-router-dom';

describe('test products component and its child Product', () => {
  const context = {
    products: [
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
  };

  it('render the Products Components', async () => {
    render(
      <AppContext.Provider value={context}>
        <Products />
      </AppContext.Provider>,
      { wrapper: BrowserRouter }
    );
    screen.debug();
    expect(screen.getByText('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')).toBeInTheDocument();
    const viewDetailsBtn = screen.getByRole('button', { name: 'View Details' });
    // click on cart so empty cart will be shown
    await userEvent.click(viewDetailsBtn);
    expect(screen.getByRole('button', { name: 'View Details' })).toBeInTheDocument();
  });
});
