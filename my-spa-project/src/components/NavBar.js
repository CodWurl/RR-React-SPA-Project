import React from 'react';
import {  Link } from "react-router-dom";
const navBar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Blog</Link>
    </li>
    <li>
      <Link to="/cats">About Me</Link>
    </li>
    <li>
      <Link to="/sheeps">Projects</Link>
    </li>
    <li>
      <Link to="/goats">Other</Link>
    </li>
  </div>
  );
}
export default navBar;