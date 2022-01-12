import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCESS,
  COUNTER,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCESS,
  REMOVE_TODO,
} from './actionTypes';

export const addTodo = data => ({
  type: ADD_TODO,
  payload: data,
});

export const addCounter = data => ({
  type: COUNTER,
  payload: data,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  payload: id,
});

export const addTodoLoading = () => ({
  type: ADD_TODO_LOADING,
});
export const addTodoSucess = data => ({
  type: ADD_TODO_SUCESS,
  payload: data,
});
export const addTodoError = data => ({
  type: ADD_TODO_ERROR,
  payload: data,
});

export const getTodoLoading = () => ({
  type: GET_TODO_LOADING,
});
export const getTodoSucess = data => ({
  type: GET_TODO_SUCESS,
  payload: data,
});
export const getTodoError = data => ({
  type: GET_TODO_ERROR,
  payload: data,
});
