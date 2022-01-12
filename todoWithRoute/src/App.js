import logo from './logo.svg';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import {Todo} from './Components/Todo/Todo';
import {TodoList} from './Components/Todo/TodoList';
import {TodoEdit} from './Components/Todo/TodoEdit';
import {Total} from './Components/Total';

function App () {
  return (
    <div className="App">
      {/* <Todo /> */}
      <Routes>

        <Route path={'/home'} element={<Todo />} />
        <Route path={'/todo/:id'} element={<TodoList />} />
        <Route path={'/todo/:id/edit'} element={<TodoEdit />} />
        <Route path={'/total'} element={<Total />} />
      </Routes>
    </div>
  );
}

export default App;
