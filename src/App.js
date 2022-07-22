import "./App.css";
import React, { useState } from "react";
import Signup from "./Component/Signup";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import Menu from "./Component/Menu";
import View from "./Component/View";
// import { Home } from "@mui/icons-material";

function App() {
  const [userarr, setUserarr] = useState([]);
  const [count, setCount] = useState(1);
  console.log(userarr);
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Signup
        userArrChild={userarr}
        setUserArrChild={setUserarr}
        count={count}
        setCount={setCount}
      />}/>
      <Route path="/login" element={<Home userarr = {userarr} setUserarr = {setUserarr} count = {count}/>}/>
      
     
      </Routes>
      
      
    </div>
  );
}

export default App;
