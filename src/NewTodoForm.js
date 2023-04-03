import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './NewTodoForm.scss';


function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      const newTodo = { id: uuid(), task: task, completed: false };
      addTodo(newTodo);
      setTask('');
    }
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodoForm;

