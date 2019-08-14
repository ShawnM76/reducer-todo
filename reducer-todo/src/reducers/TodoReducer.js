export const initialState = {
  todos: [
    {
      task: 'Learn about reducers',
      completed: false,
      id: 3892987589,
    },
    {
      task: 'Look over training kit',
      completed: true,
      id: 38929875891,
    },
  ],
};

export const todoReducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'TOGGLE_COMPLETED':
      console.log('hello');
      return {
        ...state,
        todos: state.todos.map(todo => {
          console.log(todo.id, action.payload, todo.id === action.payload);
          if (todo.id === action.payload)
            return { ...todo, completed: !todo.completed };
          else {
            return todo;
          }
        }),
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: state.todos.concat({
          task: action.payload,
          completed: false,
          id: Date.now(),
        }),
        task: '',
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(({ completed }) => !completed),
      };
    case 'UPDATE':
      return {
        ...state,
        task: action.payload,
      };

    default:
      return state;
  }
};
