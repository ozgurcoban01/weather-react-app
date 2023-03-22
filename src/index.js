import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import '@devexpress/dx-react-chart-bootstrap4/dist/dx-react-chart-bootstrap4.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>
);
