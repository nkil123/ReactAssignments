import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ margin: "10px" }}>
          Contact
        </Link>
        <Link to="/users">User</Link>
      </div>
    </>
  );
};
