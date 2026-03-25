import { render, screen } from '@testing-library/react';
import App from './App';

test('renders brand name logo', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/SP Cakes & Delight/i);
  expect(linkElements.length).toBeGreaterThan(0);
});
