import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
  it('should render without errors', () => {
    render(<NewTodoForm addTodo={() => {}} />);
    expect(screen.getByLabelText('Task:')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Todo' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<NewTodoForm addTodo={() => {}} />);
    expect(container).toMatchSnapshot();
  });
});
