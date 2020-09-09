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
          <a href="https://t.me/cmpchat_ru">{t("footer__our_telegram_chat")}</a>
          <a href="https://t.me/cmplace">{t("footer__our_telegram_channel")}</a>
        </div>
        <div>
          <p>{t("footer__information")}</p>

          <a href="https://twitter.com/cmpcoin">Twitter</a>
          <a href="https://www.facebook.com/groups/cmpcoin/">Facebook</a>
          <a href="https://medium.com/@crossmarketplace">Medium</a>
        </div>
        <div>
          <p>{t("footer__rules")}</p>
          <a href="/home">{t("footer__service_rules")}</a>
          <a href="/home">{t("footer__services")}</a>
          <a href="/home">{t("footer__payment_order")}</a>
        </div>
        <div>
          <p>{t("footer__about")}</p>
          <a href="/home">{t("footer__contacts")}</a>
          <a href="/home">{t("footer__terms_of_use")}</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
