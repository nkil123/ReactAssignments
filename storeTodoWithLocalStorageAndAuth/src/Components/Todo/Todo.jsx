import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodoLoading,
  addTodoSucess,
  addTodoError,
  getTodoLoading,
  getTodoSucess,
  getTodoError,
  addTodo
} from "../features/todos/action";

export const Todo = () => {
  const [text, setText] = useState("");
  let { loading, todos, error } = useSelector((state) => ({
    loading: state.todo.loading,
    todos: state.todo.todos,
    error: state.todo.error
  }));
  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {}

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value, "value");
    setText(value);
  };

  const handleTodo = () => {
    dispatch(addTodo({ title: text, status: false }));
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <>
      <input
        type="text"
        value={text}
        placeholder="enter todo"
        onChange={handleChange}
      />
      <br />
      <button onClick={handleTodo}>Add Todo</button>
      {todos.map((e) => {
        return <div>{e.title}</div>;
      })}
    </>
  );
};
