import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductDetails from '../productDetail';
import { AppContext } from '../context/AppContext';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Routes from '../../routes';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    productId: '1',
    //   teamId: 'team-id1',
  }),
  // useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' }),
}));

describe('test Product details Component', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
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
          }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('test Product Details component renderin', async () => {
    await act(async () => {
      render(
        <CartContext.Provider value={{ cart: [], setCart: jest.fn().mockImplementationOnce(cb => cb([], true)) }}>
          <ProductDetails />
        </CartContext.Provider>,
        { wrapper: BrowserRouter }
      );
    });
    screen.debug();

    expect(screen.getByText('109.95$')).toBeInTheDocument();

    const addToCartBtn = screen.getByRole('button', { name: 'Add to Cart' });
    // click on cart so empty cart will be shown
    await userEvent.click(addToCartBtn);
    expect(addToCartBtn).toBeInTheDocument();
  });
});
