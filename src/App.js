import "./App.css";
import React, { useState } from "react";
import Signup from "./Component/Signup";

function App() {
  const [userarr, setUserarr] = useState([]);
  const [count, setCount] = useState(1);
  console.log(userarr);
  return (
    <div className="App">
      <Signup
        userArrChild={userarr}
        setUserArrChild={setUserarr}
        count={count}
        setCount={setCount}
      />
    </div>
  );
}

export default App;
