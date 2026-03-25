import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name logo', () => {
  render(<App />);
  const linkElement = screen.getByText(/SP Cakes & Delight/i);
  expect(linkElement).toBeInTheDocument();
});
