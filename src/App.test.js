import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import '@testing-library/jest-dom/extend-expect';
// import 'q@testing-library/jest-dom';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
const mockedUsedNavigate = jest.fn();
test('renders the landing page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByRole('heading')).toHaveTextContent(/Log In/);
  expect(screen.getByRole('textfield')).toHaveDisplayValue('Email');
  expect(screen.getByRole('textfield')).toHaveDisplayValue('Password');
  expect(screen.getByRole('button', { name: 'Log In' })).toBeEnabled();
  expect(screen.getByRole('heading')).toHaveTextContent(/Don't have an account? Sign Up/);
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
