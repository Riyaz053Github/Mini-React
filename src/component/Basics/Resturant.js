import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";

const Resturant = () => {
  // Extract unique categories from Menu data
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    if (category === 'all') {
      // If 'All' is selected, show all menu items
      setMenuData(Menu);
    } else {
      // Filter menu items based on selected category
      const updatedList = Menu.filter((curElem) => curElem.category === category);
      setMenuData(updatedList);
    }
  };
  return (
    <> 
     <nav className="navbar">
    <div className="btn-group">
    <button className="btn-group__item"onClick={() =>filterItem("all")}>All</button>
      <button className="btn-group__item"onClick={() =>filterItem("breakfast")}>BreakFast</button>
      <button className="btn-group__item"onClick={() =>filterItem("lunch")}>Lunch</button>
      <button className="btn-group__item"onClick={() =>filterItem("evening")}>Evening</button>
      <button className="btn-group__item"onClick={() =>filterItem("dinner")}>Dinner</button>
      </div>
     </nav>
    <MenuCard  menuData= {menuData} />
        </>
  )
}

export default Resturant;