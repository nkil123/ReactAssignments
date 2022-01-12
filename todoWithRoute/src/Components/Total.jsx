import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
export const Total = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getTodos();
  }, []);

  function getTodos() {
    fetch(`http://localhost:3005/todos`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {
        let newTodo = res.filter((e) => {
          return e.status === true;
        });
        setTodos(newTodo);
      });
  }
  const gotoHome = () => {
    navigate("/home");
  };

  return (
    <>
      {todos.length !== 0 ? (
        todos.map((e) => {
          return (
            <div>
              <h1>Completed Tasks</h1>
              <div>
                <h1>{e.title}</h1>
              </div>
            </div>
          );
        })
      ) : (
        <h1>All the tasks are incomplete</h1>
      )}
      <button onClick={gotoHome}>Click Here to Goto Home Page</button>
    </>
  );
};
