import React, { useContext, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Input
} from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import FormControlLabel from "@mui/icons-material/FormControlLabel";
// import Checkbox from "@mui/icons-material/Checkbox";
const Login = ({ giveForm }) => {
  const { isAuth, setIsAuth, token, setToken } = useContext(AuthContext);
  //   console.log(isAuth, "isAuth");
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    // console.log(value, name);
    // form[name] = value;
    // setForm(form);
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = () => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((r) => {
        console.log(r.token);
        if (r.token === undefined) {
          console.log(r);
          alert(r.error);
        } else {
          setToken(r.token);
          setIsAuth(true);
          giveForm();
        }
      })
      .catch((e) => {
        console.log(e, "error");
        // alert("write correct password");
      });
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto"
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>{/* <LockOutlinedIcon /> */}</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Input
          name="email"
          value={form.email}
          label="Email"
          type="email"
          placeholder="Enter Email"
          fullWidth
          required
          onChange={handleChange}
        />
        <Input
          name="password"
          value={form.password}
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          onChange={handleChange}
        />
        {/* <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        /> */}
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit}
        >
          Sign in
        </Button>
        <Typography>
          <Link href="#">Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?<Link href="#">Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
