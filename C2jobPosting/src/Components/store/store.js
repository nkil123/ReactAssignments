import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { reducer as adminReducer } from "../features/admin/reducers";
import thunk from "redux-thunk";
const root = combineReducers({
  adminR: adminReducer
});

export const store = createStore(
  root,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

console.log(store.getState(), "store");
