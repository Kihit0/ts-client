import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import { ROUTER_CONFIG } from "./routes/routes";
import { Provider } from "react-redux";
import store from "store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider {...{store}}>
      <RouterProvider router={ROUTER_CONFIG} />
    </Provider>
  </React.StrictMode>
);
