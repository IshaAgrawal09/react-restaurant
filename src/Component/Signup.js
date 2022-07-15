import React, { useState } from "react";
import "./Signup.css"
import Home from "./Home";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [error, setError] = useState("");
  const [logged, setLogged] = useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRepassword = (event) => {
    setRepassword(event.target.value);
  };

  const signup = () => {
    if (props.userArrChild.length === 0) {
      if (email === "" || password === "" || repassword === "") {
        setError("Fields can't be empty!");
        return;
      } else if (password !== repassword) {
        setError("Password doesn't match!");
        return;
      } else {
        props.setUserArrChild([
          ...props.userArrChild,
          {
            id: props.count,
            email: email,
            password: password,
          },
        ]);
        props.setCount(props.count + 1);
        setError("");
        setLogged(true);
      }
    } else {
      props.userArrChild.map((item) => {
        if (email === item.email) {
          return setError("User Email already exist!");
        } else {
          props.setUserArrChild([
            ...props.userArrChild,
            {
              id: props.count,
              email: email,
              password: password,
            },
          ]);
          props.setCount(props.count + 1);
          setError("");
          setLogged(true);
        }
      });
    }
  };
  console.log(props.userArrChild);

  return logged ? (
    <Home userArr={props.userArrChild} />
  ) : (
    <div className="signup">
      
      <div className="SignupBody">
      <h2>Sign up</h2>
        <div className="form">
          <p id="error">{error}</p>
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
                    placeholder="Enter Email"
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
                    placeholder="Enter Password"
                    value={password}
                    onChange={handlePassword}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="repassword">Confirm Password</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    placeholder="Enter Confirm Password"
                    value={repassword}
                    onChange={handleRepassword}
                  />
                </td>
              </tr>
             
               
                  
                
             
            </tbody>
          </table>
          <button onClick={signup} id='signupButton'>Sign up</button>
        </div>
      </div>
      <div className="SignupImage">
        <img src="./sidelogo.jpg" alt="" />
      </div>
    </div>
  );
};

export default Signup;
