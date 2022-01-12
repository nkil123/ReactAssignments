import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const TodoEdit = () => {
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

  const gotoHome = () => {
    navigate(-2);
  };

  console.log(item, "from todo list");

  const { id } = useParams();
  console.log("id", id);

  useEffect(() => {
    getTodo();
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleUpdate = () => {
    console.log(item);
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

  function getTodo() {
    fetch(`http://localhost:3005/todos/${id}`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        console.log("from gettodo", res);
        setItem(res);
      });
  }

  return (
    <>
      <div>
        <input
          type="text"
          name="title"
          value={item.title}
          placeholder="update todo"
          onChange={handleChange}
        />
        <button onClick={handleUpdate}>Update Todo</button>
      </div>
      <div> {item.title} </div>
      <button onClick={gotoHome}>Click Here to Goto Home Page</button>
    </>
  );
};
