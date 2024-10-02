import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Detail from "./routes/Detail.js";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/movie/:id" element={<Detail />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;

