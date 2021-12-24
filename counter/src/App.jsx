import "./styles.css";
import { Counter } from "./components/Counter";
export default function App() {
  let initialValue = 1;
  return (
    <div className="App">
      <Counter val={initialValue} />
    </div>
  );
}
