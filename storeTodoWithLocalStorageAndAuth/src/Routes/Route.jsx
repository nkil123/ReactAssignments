import { Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";
import { LoginPage } from "./LoginPage";
import { Home } from "./Home";
import { Logout } from "./Logout";
export const Router = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          backgroundColor: "#BAFFB4",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
          fontFamily: "sans-serif"
        }}
      >
        <Link to={"/"} style={{ color: "black", textDecoration: "none" }}>
          HOME
        </Link>

        <Link to={"/login"} style={{ color: "black", textDecoration: "none" }}>
          Login
        </Link>
        <Link to={"/logout"} style={{ color: "black", textDecoration: "none" }}>
          Logout
        </Link>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
        </Routes>
      </div>
    </>
  );
};
