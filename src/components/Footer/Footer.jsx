import React from "react";
import { a } from "react-router-dom";
import logo from "../../images/AppBar/logo.png";
import { useTranslation } from "react-i18next";
import "../../sass/footer.sass";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_left-block">
        <img src={logo} alt="Logo" />
        <p>(c) 2020 CMP</p>
        <a href="http://crossmarket.place/">crossmarket.place ico</a>
      </div>
      <div className="footer_right-block">
        <div>
          <p>{t("footer__help")}</p>
          <a href="https://t.me/CMPairdropru_bot">Airdrop CMP</a>
          <a href="https://t.me/cmpchat_ru">Наш телеграм чат</a>
          <a href="https://t.me/cmplace">Наш телеграм канал</a>
        </div>
        <div>
          <p>{t("footer__information")}</p>

          <a href="https://twitter.com/cmpcoin">Twitter</a>
          <a href="https://www.facebook.com/groups/cmpcoin/">Facebook</a>
          <a href="https://medium.com/@crossmarketplace">Medium</a>
        </div>
        <div>
          <p>{t("footer__rules")}</p>
          <a href="/home">Правила сервиса</a>
          <a href="/home">Услуги</a>
          <a href="/home">Порядок оплаты</a>
        </div>
        <div>
          <p>{t("footer__about")}</p>
          <a href="/home">Контакты</a>
          <a href="/home">Пользовательское соглашение</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
