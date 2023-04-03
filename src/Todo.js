import { useState } from 'react';
import './Todo.scss';

function Todo({
  id,
  task,
  completed,
  removeTodo,
  editTodo,
  toggleCompletion,
}) {
  const [editing, setEditing] = useState(false);
  const [newTask, setNewTask] = useState(task);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    editTodo(id, newTask);
    setEditing(false);
  };

  const handleToggleCompletion = () => {
    toggleCompletion(id);
  };

  const todoStyle = {
    textDecoration: completed ? 'line-through' : 'none',
    cursor: 'pointer',
  };

  return (
    <li className={`todo ${completed ? 'completed' : ''}`}>
      {editing ? (
        <form onSubmit={handleUpdate} className="d-flex align-items-center">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control mr-3"
          />
          <button type="submit" className="todo-item__buttons__toggle-completion-button">
            Save
          </button>
        </form>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <span
            style={todoStyle}
            onClick={handleToggleCompletion}
            className="flex-grow-1 mr-3"
          >
            {task}
          </span>
          <div className="d-flex">
            <button
              onClick={handleEdit}
              className="todo-item__buttons__edit-button"
            >
              Edit
            </button>
            <button onClick={handleRemove} className="todo-item__buttons__remove-button">
              X
            </button>
            <button
              onClick={handleToggleCompletion}
              className="todo-item__buttons__toggle-completion-button"
            >
              {completed ? 'Remove Strike-Through' : 'Mark as Completed'}
            </button>
          </div>
        </div>
      )}
    </li>
  );
}

export default Todo;



