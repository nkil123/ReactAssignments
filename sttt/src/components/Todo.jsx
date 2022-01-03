import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export const Todo = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 3;
  const [final, setFinal] = useState(null);
  console.log(page, "page");
  const nextHand = () => {
    fetch("http://localhost:3002/db")
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        setFinal(Math.ceil(r.Todo.length / limit));
        console.log("final", final);
        return r.Todo.length;
      });
  };

  useEffect(() => {
    nextHand();
  }, []);

  useEffect(() => {
    getTodos();
  }, [page]);

  const getTodos = () => {
    fetch(`http://localhost:3002/Todo?_page=${page}&_limit=${limit}`)
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        console.log(r);
        setList(r);
      });
  };

  const addToList = (data) => {
    const paylod = {
      data,
      status: false,
      id: uuidv4()
    };

    fetch("http://localhost:3002/Todo", {
      method: "POST",
      body: JSON.stringify(paylod),
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => {
      getTodos();
    });
  };

  const changeToggle = (id) => {
    const paylod2 = {
      status: true
    };

    fetch(`http://localhost:3002/Todo/${id}`, {
      method: "PATCH",
      body: JSON.stringify(paylod2),
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => {
      getTodos();
    });
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:3002/Todo/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => {
      getTodos();
    });
  };

  const handlePag = (val) => {
    setPage(page + val);
  };

  // const showCompleted = () => {};

  return (
    <div>
      <TodoInput addToList={addToList} />
      {list.map((e) => (
        <TodoItem
          key={e.id}
          {...e}
          changeToggle={changeToggle}
          deleteItem={deleteItem}
        />
      ))}
      <div>
        {page === 1 ? (
          <button onClick={() => handlePag(-1)} disabled>
            prev
          </button>
        ) : (
          <button onClick={() => handlePag(-1)}>prev</button>
        )}
        {page === final ? (
          <button onClick={() => handlePag(1)} disabled>
            next
          </button>
        ) : (
          <button onClick={() => handlePag(1)}>next</button>
        )}

        {/* <button
          onClick={() => {
            nextHand();
          }}
        >
          s
        </button> */}
      </div>
      {/* <button onClick={showCompleted}>Show only completed ones</button> */}
    </div>
  );
};
