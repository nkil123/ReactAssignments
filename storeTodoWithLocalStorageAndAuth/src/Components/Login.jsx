import { useState } from "react";
import "./styles.css";
export const Login = ({ handleLogin }) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin(form.email, form.password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <form onSubmit={handleForm} className="form">
        <label htmlFor="">Email</label>
        <input
          type="text"
          name="email"
          id=""
          value={form.email}
          onChange={handleChange}
          className="inputBox"
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          id=""
          value={form.password}
          onChange={handleChange}
          className="inputBox"
        />

        <input type="submit" className="button" />
      </form>
    </>
  );
};
