import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders repo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/carljdp\/hyperboliq-favourites/i);
  expect(linkElement).toBeInTheDocument();
});
