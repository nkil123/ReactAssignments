export const TodoItem = ({ data, status, id, changeToggle, deleteItem }) => {
  const handleToggle = () => {
    changeToggle(id);
  };
  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <>
      <div>
        {status ? (
          <h3 style={{ textDecoration: "line-through" }}>{data}</h3>
        ) : (
          <h3>{data}</h3>
        )}

        <div>
          <span>
            {status ? (
              <button onClick={handleToggle} style={{ strokeLinecap: "green" }}>
                Completed
              </button>
            ) : (
              <button onClick={handleToggle} style={{ background: "red" }}>
                Completed
              </button>
            )}
          </span>{" "}
          <span>
            <button onClick={handleDelete}>Delete</button>
          </span>
        </div>
        {/* <p>{` ${status} ${id}`}</p> */}
      </div>
    </>
  );
};
