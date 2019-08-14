import React from 'react';

import './Todo.css';

const Todo = ({ id, task, completed, toggleCompleted }) => {
  return (
    <div
      className={'todo-task' + (completed ? ' todo-completed ' : '')}
      onClick={() => toggleCompleted(id)}>
      <li>{task}</li>
    </div>
  );
};

export default Todo;
