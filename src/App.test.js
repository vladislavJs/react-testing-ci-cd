import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {renderWithRouter} from "./tests/helpers/helperWithRouter";

describe('Testing app', () => {
  // test('renders learn react link', () => {
  //   render(<App />);
  //   const element = screen.getByText(/hello world/i)
  //   const button = screen.getByRole('button')
  //   const input = screen.getByPlaceholderText(/enter value/i)
  //   expect(element).toBeInTheDocument()
  //   expect(input).toBeInTheDocument()
  // });

  // test('render different from find and query', async () => {
  //   render(<App />)
  //   const textData = await screen.findByText('abc')
  //   expect(textData).toBeInTheDocument()
  // })

  // test('Event test', () => {
  //   render(<App/>)
  //   const button = screen.getByTestId('toggle-button')
  //   expect(screen.queryByTestId('toggle-elem')).toBeNull()
  //   fireEvent.click(button)
  //
  //   expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument()
  //   fireEvent.click((button))
  //   expect(screen.queryByTestId('toggle-elem')).toBeNull()
  // })

  test('Loading main page', () => {
    renderWithRouter()
    expect(screen.getByTestId("main-page")).toBeInTheDocument()
  })
})

