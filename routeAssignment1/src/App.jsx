// import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Product } from "./components/Products";
import { User } from "./components/User";
import { UserDetails } from "./components/UserDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/users" element={<User />}></Route>
        <Route path="/users/:id" element={<UserDetails />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
