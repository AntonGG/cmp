import React from "react";
import "../../sass/personalArea/menu.sass";

const Menu = (props) => {
  console.log(props.type);
  return (
    <div className="menu">
      <div className={`menu-tab ${props.type ? "menu-tab__active" : ""}`}>
        <span> Финансы</span>
      </div>
      <div className={`menu-tab ${!props.type ? "menu-tab__active" : ""}`}>
        Партнерский кабинет
      </div>
    </div>
  );
};

export default Menu;
