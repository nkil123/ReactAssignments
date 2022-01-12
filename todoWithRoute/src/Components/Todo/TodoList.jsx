import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const TodoList = () => {
  const navigate = useNavigate();

  let { loading, todos, error } = useSelector((state) => ({
    loading: state.loading,
    todos: state.todos,
    error: state.error
  }));
  const [item, setItem] = useState({
    title: "",
    status: Boolean
  });
  const [toggle, setToggle] = useState(false);

  console.log(item, "from todo list");

  const { id } = useParams();

  useEffect(() => {
    getTodo();
  }, []);

  const gotoHome = () => {
    navigate(-1);
  };

  const handleToggle = () => {
    setToggle(!toggle);

    setItem({ ...item, status: toggle });

    fetch(`http://localhost:3005/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        console.log(res, "HANDLEUPDATE");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleDelete = () => {
    fetch(`http://localhost:3005/todos/${id}`, {
      method: "DELETE"
    })
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        getTodo();
      });
  };

  function getTodo() {
    fetch(`http://localhost:3005/todos/${id}`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        setItem(res);
      });
  }

  return (
    <>
      <input type="text" placeholder="Update the todo" />
      {item.title === undefined ? null : (
        <div>
          <div style={toggle ? { textDecoration: "line-through" } : null}>
            {" "}
            {item.title}
          </div>
          <Link to={`/todo/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDelete}>Delete</button>
          <button
            onClick={handleToggle}
            style={toggle ? { backgroundColor: "green" } : null}
          >
            {toggle ? "COMPLETED" : "NOT DONE"}
          </button>
        </div>
      )}
      <button onClick={gotoHome}>Click Here to Goto Home Page</button>
    </>
  );
};
