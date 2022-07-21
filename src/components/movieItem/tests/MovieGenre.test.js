import { render, screen } from '@testing-library/react';
import MovieGenre from '../MovieGenre';

test('renders MovieGenre with two genres', () => {
  render(<MovieGenre genre={['Action', 'Comedy']} />);
  const linkElement = screen.getByText(/Action & Comedy/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders MovieGenre with thre genres', () => {
  render(<MovieGenre genre={['Action', 'Comedy', 'Drama']} />);
  const linkElement = screen.getByText(/Action, Comedy, Drama/i);
  expect(linkElement).toBeInTheDocument();
});