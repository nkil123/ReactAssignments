import logo from "./logo.svg";
import "./App.css";

function App() {
  const message = "Hello world this is mn";
  return (
    <div className="App">
      {/* <h1>
        {[1, 2, 3].map((e) => (
          <h1>{message}</h1>
        ))}
      </h1>
      <h1 style={{ color: "red", fontSize: "40px" }}>hello</h1>{" "} */}
      {/* //using inllinle style */}
      {/* <img src={logo} width={540} alt="" />
      <input type="text" /> */}
      <Mos />
      <Mms />
    </div>
  );
}

function Mos() {
  return (
    <div className="wrapper">
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>Blackberry</li>
        <li>iphone</li>
        <li>Windows Phone</li>
      </ul>
    </div>
  );
}
function Mms() {
  return (
    <div className="wrapper">
      <h1>Mobile Manufaturers</h1>
      <ul>
        <li>Samsung</li>
        <li>HTC</li>
        <li>Micromax</li>
        <li>Apple</li>
      </ul>
    </div>
  );
}

export default App;
