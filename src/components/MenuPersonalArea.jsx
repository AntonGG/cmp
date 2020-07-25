import React from "react";
import { Link } from "react-router-dom";
import "../sass/personalArea/menu.sass";

const MenuPersonalArea = (props) => {
  console.log(props.type);
  return (
    <div className="menu">
      <Link to="/lk/balance">
        <div className={`menu-tab ${props.type ? "menu-tab__active" : ""}`}>
          <span> Финансы</span>
        </div>
      </Link>
      <Link to="/lk/partner-cabinet">
        <div className={`menu-tab ${!props.type ? "menu-tab__active" : ""}`}>
          Партнерский кабинет
        </div>
      </Link>
    </div>
  );
};

export default MenuPersonalArea;
