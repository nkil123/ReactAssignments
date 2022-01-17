import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { store } from "../src/Components/store/store";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
