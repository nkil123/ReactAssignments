import {combineReducers, createStore} from 'redux';
import {reducer as todoReducer} from '../Components/features/todos/reducer';
import {reducer as authReducer} from '../Components/features/auth/reducers';

const root = combineReducers ({
  auth: authReducer,
  todo: todoReducer,
});

export const store = createStore (
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
);
