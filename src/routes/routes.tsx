import { createBrowserRouter } from "react-router-dom";
import { Error } from "pages/Error";
import { App } from "App";

export const ROUTER_CONFIG = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
]);
