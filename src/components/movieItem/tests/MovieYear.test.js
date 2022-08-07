import { render, screen } from '@testing-library/react';
import MovieYear from '../MovieYear';
import React from 'react';

test('renders Movie Year', () => {
  render(<MovieYear date={'2018-09-18'} />);
  const linkElement = screen.getByText(/2018/i);
  expect(linkElement).toBeInTheDocument();
});