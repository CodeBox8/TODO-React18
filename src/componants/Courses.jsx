import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Courses() {
  return (
    <>
      <h1>** Courses **</h1>
      <p>
        ReactJS is a popular open-source JavaScript library used for building
        user interfaces, especially for single-page applications where data
        changes dynamically without reloading the page. It was developed by
        Facebook and is now maintained by Meta (formerly Facebook) along with a
        community of developers.
      </p>
      <ul className="list-group">
             
                <li>
                  <NavLink className="dropdown-item" to="reactJs">
                  ReactJS
                  </NavLink>
                </li>
                <li>
                <NavLink className="dropdown-item" to="nodeJs">
                    NodeJS
                  </NavLink>
                </li>
                <li>
                <NavLink className="dropdown-item" to="vueJs">
                    VueJS
                  </NavLink>
                </li>
              </ul>
      <Outlet/>
    </>
  );
}
