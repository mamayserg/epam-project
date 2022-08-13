import SortMoviesSelect from "../SortMoviesSelect";
import {render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

const releaseDateRoute = '/search?sortOrder=desc&sortBy=release_date'
const emptyRoute = '/search'

const setup = (routeName ) => {
  const utils = render(<MemoryRouter initialEntries={[routeName]}><SortMoviesSelect /></MemoryRouter>)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByLabelText('sort-movie')
  return {
    input,
    ...utils,
  }
}


test('It should show route name Realise date in sort value', () => {
  setup(releaseDateRoute)
  expect(screen.getByLabelText('sort-movie', { name: 'Realise date' })).toBeInTheDocument()

})

test('It should show route name empty in sort value', () => {
  setup(emptyRoute)
  expect(screen.getByLabelText('sort-movie', { name: '' })).toBeInTheDocument()

})


