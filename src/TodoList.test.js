import { render } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
  it('renders without crashing', () => {
    render(<TodoList />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
