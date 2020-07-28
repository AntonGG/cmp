import React from "react";
import { Link } from "react-router-dom";
import settingsLogo from "../../../images/AppBar/settings.png";
const RightMenu = ({ isAuth, onLogout, history }) => {
  return (
    <div className="right-menu">
      {isAuth ? (
        <>
          <Link to="/auth/signIn">Настройки</Link>
          <Link onClick={() => onLogout(history)} to="/">
            Выход
          </Link>
          <Link to="/">
            <img
              className="app-bar_settings-logo"
              src={settingsLogo}
              alt="Logo"
            />
          </Link>
        </>
      ) : (
        <>
          <Link to="/auth/signIn">Вход</Link>
          <Link to="/auth/signUp">Регистрация</Link>
          <Link to="/">
            <img
              className="app-bar_settings-logo"
              src={settingsLogo}
              alt="Logo"
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default RightMenu;
