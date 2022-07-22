import React, { useState } from "react";
import restaurantList from "./test";
import { Link } from "react-router-dom";
import "./View.css"
import Menu from "./Menu";
const View = (props) => {
  const [list, setList] = useState(restaurantList["restaurants"]);
  const [logged,setLogged] = useState(false)

  const back = () =>{
    setLogged(true)
  }
  const val = list.find((item) => item.id == props.id);
  // debugger;
  console.log(val.operating_hours);

  return (
    logged?<Menu />:
    <div className="viewDiv">
  
        <div className="title">
          <div id="left">
            <img src={val.photograph} alt="" />
          </div>
          <div id="right">
            <h3>{val.name}</h3>
            <p>{val.neighborhood}</p>
            <p>{val.address}</p>
            <div id="delievery">
              <div className="space">
                <p className="time">41 mins</p>
                <p className="blur">Delievery Time</p>
              </div>
              <div className="space" style={{color: 'gray'}}>|</div>
              <div className="space">
                <p className="time">&#8377; 350</p> 
                <p className="blur">Cost for Two</p>
              </div>
            </div>
          </div>
          <div className="offerMain">
            <div id="offerHeading">OFFER</div>
            <div className="texts">
              <div className="flex"><span><i class="fa-regular fa-face-laugh-wink"></i></span>
              <div> 60% OFF up to &#8377;120 | Use Code STEALDEAL</div>
              </div>
              <div className="flex"><span><i class="fa-regular fa-face-laugh-wink"></i></span>
              <div>50% OFF Up to &#8377;100 + Flat &#8377;30 cashback with Paytm</div>
              </div>

            </div>
          </div>
        </div>
       <div id="timingHeading">
         <h1>Opening Hours</h1>
       </div>
       <hr style={{width: '90%'}}/>
        <div className="timing">
          <table>
            <tbody>
              {Object.keys(val.operating_hours).map((i, idx) => {
                return <tr key={idx}>
                  <td>{i}</td>
                  <td>{val.operating_hours[i]}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>

        <div id="timingHeading">
         <h1>Reviews</h1>
       </div>
       <hr style={{width: '90%'}}/>
        <div className="reviews">
          
          {val.reviews.map((item ,idx) =>{
            return <>
              <table>
            <tbody>
                <tr key={idx}>
                  <td>Name: </td>
                  <td>{item.name}</td>
                </tr>
                <tr key={idx}>
                  <td>Date:</td>
                  <td>{item.date}</td>
                </tr>
                <tr key={idx}>
                  <td>Rating:</td>
                  <td>{item.rating}</td>
                </tr>
                <tr key={idx}>
                  <td>Comments:</td>
                  <td>{item.comments}</td>
                </tr>
                </tbody>
          </table>
            </>
          })}
          
          </div>
          <button id="back" onClick={back}>Back</button>
   </div>
  );
};

export default View;
