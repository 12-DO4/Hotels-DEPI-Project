import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TourDetails from "./components/TourDetails";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/tourDetails/:id',
    element: <TourDetails />
  }
])
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
