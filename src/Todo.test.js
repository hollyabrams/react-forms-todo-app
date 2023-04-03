import { render } from '@testing-library/react';
import Todo from './Todo';

describe('Todo', () => {
  const todo = {
    id: 1,
    task: 'Test Todo',
    completed: false,
    removeTodo: jest.fn(),
    editTodo: jest.fn(),
    toggleCompletion: jest.fn(),
  };

  it('should render without crashing', () => {
    render(<Todo {...todo} />);
  });

  it('should match snapshot', () => {
    const { container } = render(<Todo {...todo} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
