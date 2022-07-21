import SearchBar from '../SearchBar'
import {render, fireEvent} from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
const routeName = '/search?searchBy=title&search=test+route+name'


const setup = () => {
  const utils = render(<MemoryRouter initialEntries={[routeName]}><SearchBar /></MemoryRouter>)
  const input = utils.getByLabelText('search-input')
  return {
    input,
    ...utils,
  }
}

test('It should show route name in input value', () => {
  const {input} = setup()
  expect(input.value).toBe('test route name')
})

test('It should  delete input value from route', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: ''}})
  expect(input.value).toBe('')
})

test('It should show input value', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'test name'}})
  expect(input.value).toBe('test name')
})

test('It should  delete input value', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23') 
  fireEvent.change(input, {target: {value: ''}})
  expect(input.value).toBe('')
})
