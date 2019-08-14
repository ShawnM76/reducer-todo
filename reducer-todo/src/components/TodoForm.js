import React from 'react';

const TodoForm = ({ addTodo, clearCompleted, task, handleTask }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(task);
  };

  const handleClear = e => {
    e.preventDefault();
    clearCompleted();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={task} name='task' onChange={handleTask} />
      <button type='submit'> Add </button>
      <button onClick={handleClear}> Clear </button>
    </form>
  );
};

export default TodoForm;
