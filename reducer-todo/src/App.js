import React, { useReducer } from 'react';
import Todolist from './components/TodoList';
import TodoForm from './components/TodoForm';
import { initialState, todoReducer } from './reducers/TodoReducer';

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log('state', state);
  const toggleCompleted = id =>
    dispatch({ type: 'TOGGLE_COMPLETED', payload: id });
  const addTodo = task => dispatch({ type: 'ADD_TODO', payload: task });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });
  const handleTask = event =>
    dispatch({ type: 'UPDATE', payload: event.target.value });

  // toggleItem = id => {
  //   this.setState({
  //     taskData: this.state.taskData.map(item => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       } else {
  //         return item;
  //       }
  //     }),
  //   });
  // };

  // addItem = itemName => {
  //   const newItem = {
  //     name: itemName,
  //     id: Date.now(),
  //     purchased: false,
  //   };
  //   this.setState({
  //     taskData: [...this.state.taskData, newItem],
  //   });
  // };

  // clearCompleted = () => {
  //   this.setState({
  //     taskData: this.state.taskData.filter(item => !item.completed),
  //   });
  // };

  return (
    <div>
      <h2>Welcome to your Todo App!</h2>
      <TodoForm
        addTodo={addTodo}
        clearCompleted={clearCompleted}
        handleTask={handleTask}
        task={state.task}
      />
      <Todolist todos={state.todos} toggleCompleted={toggleCompleted} />
    </div>
  );
};

export default App;
