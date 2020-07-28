import React from "react";
import { Link } from "react-router-dom";
import "../../sass/auth/menu.sass";

const Menu = (props) => {
  return (
    <div className="auth-menu">
      <Link to="signIn">
        <div className="auth-menu__glow-circle-div">
          <div
            className={` ${props.type ? "auth-menu__glow-circle" : ""}`}
          ></div>
          <div
            className={`auth-menu-tab ${
              props.type ? "auth-menu-tab__active" : ""
            }`}
          >
            Вход
          </div>
        </div>
      </Link>
      <Link to="signUp">
        <div className="auth-menu__glow-circle-div">
          <div
            className={` ${!props.type ? "auth-menu__glow-circle" : ""}`}
          ></div>
          <div
            className={`auth-menu-tab ${
              !props.type ? "auth-menu-tab__active" : ""
            }`}
          >
            Регистрация
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
