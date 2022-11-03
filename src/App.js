import React from "react";

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import About from "./nav/about";
import  Home  from "./nav/home";
import  Users  from "./nav/users";
import Price  from "./nav/price";


export default function App() {
  return (
    <Router>
      <div className="Home">
        <nav className="Nav">
        <div className="Logo">
            <img src="" alt="urguu"></img>
          </div>
          <ul className="Ul">
            <li>
              <Link to="/home">Эхлэл</Link>
            </li>
            <li>
              <Link to="/about">Тун удахгүй</Link>
            </li>
            <li>
              <Link to="/users">Захиалга</Link>
            </li>
            <li>
              <Link to="/price">ҮНЭ УРАМШУУЛАЛ</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/home" element={<Home />} >
          </Route>
          <Route path="/about" element={<About />} >
          </Route>
          <Route path="/users" element={<Users />} >
          </Route>
          <Route path="/price" element={<Price />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

