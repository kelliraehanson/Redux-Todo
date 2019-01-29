import { UPDATE_TITLE, ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  title: 'TODO LIST:',
  todos: [
    { thing: 'Wake up', finished: true },
    { thing: 'Breakfast', finished: false },
    { thing: 'School', finished: false },
    { thing: 'Lunch', finished: false },
    { thing: 'Study', finished: false },
    { thing: 'Dinner', finished: false },
    { thing: 'Sleep', finished: false }
  ]
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case UPDATE_TITLE:
      console.log('update_title', action);
      return {
        ...state,
        title: action.payload
      };
    case ADD_TODO:
      console.log('add_todo', action);
      const newTodo = {
        thing: action.payload,
        finished: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, finished: !todo.finished }
            : todo
        )
      };

    //   case DELETE_ITEM: 
    //   return {
    //       ...state,
    //       todos: state.todos.

    //   }
    default:
      return state;
  }
}

export default reducer;