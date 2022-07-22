import React, { useState } from "react";
import Menu from "./Menu";
import "./Home.css";

import { Link } from "react-router-dom";

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin,setLoggedin] = useState(false);
  const [error, setError] = useState("");
  const [color,setColor] = useState("green")

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  //  LOGIN FUCNTION /
  const login = () => {
    if(props.count == 1){
      setError("Your account is not registered!");
      setColor("red")
      return;
    }
    if (email === "" || password === "") {
      setError("Fields can't be empty!");
      setColor("red")
    } else {
      console.log(props.userArr);
      props.userArr.map((item) => {
        if (email != item.email) {
          setError("Email doesn't match!");
          setColor("red")
        } else if (password !== item.password) {
          setError("Password doesn't match!");
          setColor("red")
        } else {
          setLoggedin(true);
        }
      });
    }
  };
  

  return (
    <>
  
  {loggedin ? 
    <Menu />
   : (
    <div className="home">
    
      <div className="content">
        <h2>Login</h2>
        <p id="error" style={{color: `${color}`}}>{error}</p>
        
        <div className="loginForm">
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="email">email Address</label>
                </td>
                <td>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="enter email"
                    value={email}
                    onChange={handleEmail}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter password"
                    value={password}
                    onChange={handlePassword}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <p id="newUser">New User   <Link to="/">SignUp</Link></p>
          <button onClick={login} id="loginButton">
            Log in
          </button>
         
        </div>
      </div>
      <div className="loginImage">
        <img src="./sidelogo.jpg" alt="" />
      </div>
    </div>
  )
   }
  </>
  )
   
};

export default Home;
