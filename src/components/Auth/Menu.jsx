import React from "react";
import "../../sass/auth/menu.sass";
const Menu = (props) => {
  console.log(props.type);
  return (
    <div className="auth-menu">
      <div
        className={`auth-menu-tab ${props.type ? "auth-menu-tab__active" : ""}`}
      >
        Вход
      </div>
      <div
        className={`auth-menu-tab ${
          !props.type ? "auth-menu-tab__active" : ""
        }`}
      >
        Регистрация
      </div>
    </div>
  );
};

export default Menu;
