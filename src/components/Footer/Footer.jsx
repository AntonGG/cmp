import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/AppBar/logo.png";
import "../../sass/footer/footer.sass";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left-block">
        <img className="app-bar_logo" src={logo} alt="Logo" />
        <p>(c) 2020 CMP by Gregor</p>
        <Link to="/home">Политика конфиденциальности</Link>
      </div>
      <div className="footer_right-block">
        <div>
          <p>Помощь</p>
          <Link to="/home">База знаний</Link>
          <Link to="/home">Форум</Link>
          <Link to="/home">Тех поддержка</Link>
        </div>
        <div>
          <p>Информация</p>
          <Link to="/home">Последние выплаты</Link>
          <Link to="/home">Публикации</Link>
          <Link to="/home">Каталог</Link>
        </div>
        <div>
          <p>Правила</p>
          <Link to="/home">Правила сервиса</Link>
          <Link to="/home">Услуги</Link>
          <Link to="/home">Порядок оплаты</Link>
        </div>
        <div>
          <p>О нас</p>
          <Link to="/home">Контакты</Link>
          <Link to="/home">Блог</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
