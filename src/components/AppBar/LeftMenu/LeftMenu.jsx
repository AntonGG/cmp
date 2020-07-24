import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <Link to="/lk/balance">Balance</Link>
      <Link to="/home">Exchange</Link>
      <Link to="/home">Contact</Link>
      <Link to="/home">Service</Link>
      <Link to="/home">Forum</Link>
    </div>
  );
};

export default LeftMenu;
