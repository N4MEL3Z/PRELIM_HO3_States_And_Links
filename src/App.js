import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Todolist from "./components/Todolist";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="coffee-home">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                message={`About Coffee AST
                \nWe are passionate about coffee and aim to provide the best experience.`}
              />
            }
          />
          <Route path="/todolist" element={<Todolist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
