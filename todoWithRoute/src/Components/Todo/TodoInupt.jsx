export const TodoInput = ({ edit, handleChange, handleTodo, text }) => {
  return (
    <>
      {edit ? (
        <div>
          <input
            type="text"
            value={text}
            placeholder="update todo"
            onChange={handleChange}
          />
          <br />
          <button onClick={handleTodo}>Update Todo</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={text}
            placeholder="enter todo"
            onChange={handleChange}
          />
          <br />
          <button onClick={handleTodo}>Add Todo</button>
        </div>
      )}
    </>
  );
};
