// import necessary react testing library helpers here
// import the Counter component here
import React from 'react'
import {render,fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './../components/App.js'

beforeEach(() => {
  // Render the Counter component here
  render(<App />)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const countMessage = screen.getByText(/count/i)
  expect(countMessage).toBeInTheDocument()
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterAtZero = screen.getByText(/0/i)
  expect(counterAtZero).toBeInTheDocument()
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText(/\+/i))

  expect(screen.getByText(/1/i))
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  fireEvent.click(screen.getByText(/\+/i))
  fireEvent.click(screen.getByText(/\+/i))
  fireEvent.click(screen.getByText(/-/i))
  expect(screen.getByText(/1/i))
});
