import React from "react";
import { Link } from "react-router-dom";

const LeftMenu = () => {
  return (
    <div className="left-menu">
      <Link to="/lk/balance">Финансы</Link>
      <Link to="/lk/partner-cabinet">Партнерский кабинет</Link>
      <Link to="/lk/task-feed">Лента заданий</Link>
      <Link to="/lk/presale">Предпродажа монет</Link>
    </div>
  );
};

export default LeftMenu;
