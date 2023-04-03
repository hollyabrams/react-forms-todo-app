import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.scss';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Get todos from localStorage on page load
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save todos to localStorage on state change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const removeAllTodos = () => {
    setTodos([]);
  };

  const editTodo = (id, newTask) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    }));
  };

  const toggleCompletion = (id) => {
    setTodos(todos => todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  return (
    <div className="container">
      <div className="todo-header">
        <h1 className="todo-header__title">Todo List</h1>
        <button
          onClick={removeAllTodos}
          className="todo-header__delete-all-button"
        >
          Delete All
        </button>
      </div>
      <NewTodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
