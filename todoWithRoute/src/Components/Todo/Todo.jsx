import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addTodoLoading,
  addTodoSucess,
  addTodoError,
  getTodoLoading,
  getTodoSucess,
  getTodoError
} from "../../store/action";
import { TodoList } from "./TodoList";
import { Card } from "antd";
import "antd/dist/antd.css";
import { FileFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { TodoInput } from "./TodoInupt";

export const Todo = () => {
  const [text, setText] = useState("");
  let { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error
  }));
  console.log("todos", todos);
  const [edit, setEdit] = useState(false);
  const [toggleValue, setToggleValue] = useState(false);
  const [id, setId] = useState(null);
  // const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    dispatch(getTodoLoading());
    fetch("http://localhost:3005/todos")
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        dispatch(getTodoSucess(r));
        // todos = r;
      })
      .catch((e) => {
        dispatch(getTodoError(e));
      });
  }

  const handleChange = (e) => {
    const { value } = e.target;

    setText(value);
  };

  const handleTodo = () => {
    if (!text) {
      alert("please fill the details");
    } else if (edit) {
      dispatch(addTodoLoading());
      fetch(`http://localhost:3005/todos/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: false, title: text }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((r) => {
          // console.log(r);
          dispatch(addTodoSucess(r));
          getTodo();
        })
        .catch((e) => {
          dispatch(addTodoError(e));
        });

      setEdit(false);
    } else {
      dispatch(addTodoLoading());
      fetch("http://localhost:3005/todos", {
        method: "POST",
        body: JSON.stringify({ status: false, title: text }),
        headers: {
          "content-type": "application/json"
        }
      })
        .then((res) => {
          return res.json();
        })
        .then((r) => {
          // console.log(r);
          dispatch(addTodoSucess(r));
          getTodo();
        })
        .catch((e) => {
          dispatch(addTodoError(e));
        });
    }
  };

  const handleEdit = (id) => {
    console.log(id, "id");
    let todoItem = todos.find((e) => {
      return e.id === id;
    });
    setId(id);
    setEdit(true);
    setText(todoItem.title);
    // console.log(todoItem.title);
    // console.log("inside handle edit", id, edit, todo);
  };

  const handleDelete = (id) => {
    dispatch(addTodoLoading());
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE",

      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        // console.log(r);
        dispatch(addTodoSucess(r));
        getTodo();
      })
      .catch((e) => {
        dispatch(addTodoError(e));
      });
  };

  const handleToggle = (id) => {
    let todoItem = todos.find((e) => {
      return e.id === id;
    });
    todoItem.status = !todoItem.status;
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(todoItem),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        // console.log(r);
        dispatch(addTodoSucess(r));
        getTodo();
      })
      .catch((e) => {
        dispatch(addTodoError(e));
      });
  };

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Something went wrong</div>
  ) : (
    <>
      <TodoInput
        edit={edit}
        text={text}
        handleChange={handleChange}
        handleTodo={handleTodo}
      />
      <Card
        title="My Todos"
        style={{ width: "50%", margin: "auto", border: "2px solid black" }}
      >
        {todos.map((e) => {
          return (
            <Link to={`/todo/${e.id}`}>
              {/* <TodoList
                {...e}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
                toggleValue={toggleValue}
              /> */}
              <h1>{e.title}</h1>
            </Link>
          );
        })}
      </Card>
      <Link to={"/total"}>
        <button>Show Completed tasks</button>
      </Link>
    </>
  );
};
