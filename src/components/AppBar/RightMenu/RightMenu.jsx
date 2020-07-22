import React from "react";
import { Link } from "react-router-dom";
import settingsLogo from "../../../images/AppBar/settings.png";
const RightMenu = () => {
  return (
    <div className="right-menu">
      <Link to="/auth/signIn">Sign In</Link>
      <Link to="/auth/signUp">Create an account</Link>
      <Link to="/home">
        <img className="app-bar_settings-logo" src={settingsLogo} alt="Logo" />
      </Link>
    </div>
  );
};

export default RightMenu;
