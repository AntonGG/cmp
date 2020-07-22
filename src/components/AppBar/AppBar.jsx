import React from "react";
import LeftMenu from "./LeftMenu/LeftMenu";
import logo from "../../images/AppBar/logo.png";
import "../../sass/appBar.sass";
import RightMenu from "./RightMenu/RightMenu";

const AppBar = () => {
  return (
    <div className="app-bar">
      <div className="app-bar_left-container">
        <img className="app-bar_logo" src={logo} alt="Logo" />
        <LeftMenu />
      </div>
      <RightMenu />
    </div>
  );
};

export default AppBar;
