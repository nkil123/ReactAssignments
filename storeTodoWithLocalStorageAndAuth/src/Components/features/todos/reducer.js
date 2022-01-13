import {LoadData, saveData} from '../../../utils/localStorage';
import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCESS,
  COUNTER,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCESS,
} from './actionTypes';

const init = {
  loading: false,
  todos: LoadData ('todos') || [],
  error: false,
  counter: 5,
};
export const reducer = (state = init, {type, payload}) => {
  console.log (state.counter, payload);

  switch (type) {
    case ADD_TODO:
      const updateTodos = [...state.todos, payload];
      saveData ('todos', updateTodos);

      return {
        ...state,
        todos: updateTodos,
      };

    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODO_SUCESS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        error: true,
      };
    case COUNTER:
      return {
        ...state,
        counter: state.counter + payload,
      };

    default:
      return state;
  }
};
