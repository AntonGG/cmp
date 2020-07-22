import React from "react";

const Menu = (props) => {
  console.log(props.type);
  return (
    <div className="menu">
      <div className={`menu-tab ${props.type ? "menu-tab__active" : ""}`}>
        Вход
      </div>
      <div className={`menu-tab ${!props.type ? "menu-tab__active" : ""}`}>
        Регистрация
      </div>
    </div>
  );
};

export default Menu;
