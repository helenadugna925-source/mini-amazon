import React from "react";
import {Link} from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Components/Home.jsx";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}