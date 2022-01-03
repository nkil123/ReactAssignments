import { useState } from "react";

export const TodoInput = ({ addToList }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    addToList(title);
    setTitle("");
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={title}
          placeholder="Add Item Todo List"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </>
  );
};
