import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const LeftMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="left-menu">
      <Link to="/lk/balance">{t("menu__finance")}</Link>
      <Link to="/lk/partner-cabinet">{t("menu__partner_cabinet")}</Link>
      {/* <Link to="/lk/task-feed">Лента заданий</Link> */}
      <Link to="/lk/presale">{t("menu__presale")}</Link>
    </div>
  );
};

export default LeftMenu;
