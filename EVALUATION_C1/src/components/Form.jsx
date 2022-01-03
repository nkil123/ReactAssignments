import { useRef, useState } from "react";

export const Form = ({ cardData }) => {
  const ref = useRef(null);
  const [form, setForm] = useState({
    title: "",
    ingrd: "",
    time: "",
    instr: "",
    image: ""
  });
  //   console.log(ref.current.files[0]);
  const handleChange = (e) => {
    let { name, value, type } = e.target;

    // value = type === "file" ? URL.createObjectURL(ref.current.files[0]) : value;
    setForm({ ...form, [name]: value });
  };
  const submit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3005/data", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    }).then((r) => {
      cardData();
    });

    setForm({ title: "", ingrd: "", time: "", instr: "", image: "" });
  };
  return (
    <>
      <form>
        <label htmlFor="">Title</label>
        <br />
        <input
          type="text"
          name="title"
          placeholder="Enter the title here"
          value={form.title}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Ingredients</label>
        <br />
        <input
          type="text"
          name="ingrd"
          placeholder="Enter the Ingredients here"
          value={form.ingrd}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Time to cook</label>
        <br />
        <input
          type="number"
          name="time"
          placeholder="time to cook in hours"
          value={form.time}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="file"
          name="image"
          ref={ref}
          placeholder="Upload file"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="">Instruction</label>
        <br />
        <input
          type="text"
          name="instr"
          placeholder="Enter the instructions here"
          value={form.instr}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" onClick={submit} />
      </form>
    </>
  );
};
