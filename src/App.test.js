import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Routes from './routes';
import { MemoryRouter } from 'react-router-dom';

describe('test App Component Properly', () => {
  let originalFetch;

  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
      }])
    }));
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it("test App Component on page load", async () => {
    await render(<App/>);

    // screen.debug();

    const cartBtn = screen.getByRole('button', { name: 'Cart' });
    // click on cart so empty cart will be shown
    await act(async () => userEvent.click(cartBtn));
    expect(screen.getByText('You have no items in your shopping cart, start adding some!')).toBeInTheDocument();
  });

  // it('route to home page', async () => {
  //   await act(async () => render(
  //     <MemoryRouter initialEntries={['/']} initialIndex={0}>
  //       <Routes />
  //     </MemoryRouter>
  //   ));

  //   screen.debug();
  // })
});
