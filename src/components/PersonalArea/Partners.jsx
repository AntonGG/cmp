import React from "react";
import "../../sass/personalArea/partners.sass";

const Partners = () => {
  return (
    <div className="partners">
      <div className="partners__count">
        <div className="partners__circle"></div>
        <span className="partners__sum">81</span>
        <span className="partners__you-brought">Партнеров вы привели</span>
      </div>
      <div className="partners__balance-cmp">
        <span className="partners__balance-cmp__info">91000</span>
        <span className="partners__balance-cmp__text">Баланс cmp</span>
      </div>
    </div>
  );
};

export default Partners;
