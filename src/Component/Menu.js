import React, { useState } from "react";
import "./Menu.css";
import restaurantList from "./test";
import View from "./View";

const Menu = () => {
  const [inputs, setInput] = useState("");
  const [view, setView] = useState(false);
  const [id, setId] = useState("");
  const [list, setList] = useState(restaurantList["restaurants"]);
  // const [count,setCount] = useState(0)
  const [selectedList, SetselectedList] = useState(list);
 

  const handleInput = (event) => {
    setInput(event.target.value.toLowerCase());
  };

  const search = () => {
    if (inputs == "") {
      SetselectedList(list);
    
    } else {
      SetselectedList(
        list.filter(
          (item) =>
            item.name.toLowerCase().includes(inputs) ||
            item.cuisine_type.toLowerCase().includes(inputs) ||
            item.neighborhood.toLowerCase().includes(inputs)
        )
      );
     
    }

    
  };
  
  const handleView = (event) => {
    setId(event.target.id);
    setView("true");
  };

  return view ? (
    
    <View id={id} />
  ) : (
    <div className="menu">
      <nav>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search for restaurants and food"
          value={inputs}
          onChange={handleInput}
        />
        <button onClick={search}>Search</button>
      </nav>

      { (selectedList.length == 0)? (
        <div className="noProduct">No Such Product Found!<img src="./emptyCart.png" alt=""/></div>
      ) : (
        <div className="item">
          {selectedList.map((item) => {
            return (
              <>
                <div className=" singleItem " key={item.id}>
                  <img src={item.photograph} alt="" />
                  <h6>{item.name}</h6>
                  <div>{item.neighborhood}</div>
                  <div>{item.address}</div>
                  <hr />
                  <div id="cuisine">
                    <button className="view" id={item.id} onClick={handleView}>
                      Quick View
                    </button>
                    <div>{item.cuisine_type}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
