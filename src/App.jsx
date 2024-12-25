import React from "react";
import "./css/app.css";
import "./css/sideBars.css";

import NavBar from "./componants/NavBar";
import AddList from "./componants/AddList";
import AboutUs from "./componants/AboutUs";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <AddList />
      </div>
    ),
  },
  {
    path: "/addList",
    element: (
      <div>
        <NavBar />
        <AddList />
      </div>
    ),
  },
  {
    path: "/aboutUs",
    element: <div>
    <NavBar />
    <AboutUs />
  </div>,
  },
]);

function App() {
  return (
    <>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
