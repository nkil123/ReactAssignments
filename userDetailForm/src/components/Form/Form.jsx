import { useRef, useState } from "react";

export const Form = ({ getData }) => {
  const profile = useRef(null);

  const [form, setForm] = useState({
    Name: "",
    Age: "",
    Address: "",
    MaritalStatus: Boolean,
    department: "",
    Profile: ""
  });
  const handleChange = (e) => {
    // console.log("e", e.target.name, profile.current.files[0].name);

    if (e.target.name === "Profile") {
      setForm({
        ...form,
        Profile: profile.current.files[0].name
      });
    } else {
      let { name, value, checked, type } = e.target;
      value = type === "checkbox" ? checked : value;
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(form);
    // console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        name="Name"
        placeholder="Enter Name"
      />
      <input
        onChange={handleChange}
        type="text"
        name="Age"
        placeholder="Enter Age"
      />
      <input
        onChange={handleChange}
        type="text"
        name="Address"
        placeholder="Enter address"
      />
      <select onChange={handleChange} name="department">
        <option value="Technical/FrontEnd">Technical/FrontEnd</option>
        <option value="Technical/BackEnd">Technical/BackEnd</option>
        <option value="HR">HR</option>
      </select>
      <input
        onChange={handleChange}
        type="text"
        name="Salary"
        placeholder="Enter Salary"
      />
      <label htmlFor="">
        Married
        <input onChange={handleChange} type="checkbox" name="MaritalStatus" />
      </label>

      <input onChange={handleChange} type="file" name="Profile" ref={profile} />
      <input type="submit" />
    </form>
  );
};
