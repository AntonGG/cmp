import React from "react";
import { useTranslation } from "react-i18next";
import { langEmodjiArray } from "../i18n";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  if (!i18n.language) {
    return "";
  }

  return (
    <div>
      <select
        defaultValue={i18n.language}
        onChange={(event) => {
          changeLanguage(event.target.value);
        }}
      >
        {langEmodjiArray.map((item, index) => (
          <option key={index} value={item.lang}>
            {item.emodji}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSwitcher;
