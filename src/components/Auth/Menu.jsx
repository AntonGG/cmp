import React from "react";
import { Link } from "react-router-dom";
import "../../sass/auth/menu.sass";

const Menu = (props) => {
  console.log(props.type);
  return (
    <div className="auth-menu">
      <Link to="signIn">
        <div
          className={`auth-menu-tab ${
            props.type ? "auth-menu-tab__active" : ""
          }`}
        >
          Вход
        </div>
      </Link>
      <Link to="signUp">
        <div
          className={`auth-menu-tab ${
            !props.type ? "auth-menu-tab__active" : ""
          }`}
        >
          Регистрация
        </div>
      </Link>
    </div>
  );
};

export default Menu;
