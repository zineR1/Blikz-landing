import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Containers/Home.jsx";
import { Login } from "./Containers"




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element = {<Home/>}></Route>
          <Route exact path="/login" element = {<Login/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
