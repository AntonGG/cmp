import React from "react";
import "../../sass/personalArea/partners.sass";
import invitersLogo from "../../images/PersonalArea/inviters.png";

const Partners = ({ inviters, wallet }) => {
  return (
    <div className="partners">
      <div className="partners__count">
        <img className="partners__logo" src={invitersLogo} alt="Logo" />
        <span className="partners__sum">{inviters}</span>
        <span className="partners__you-brought">Приведено партнеров</span>
      </div>
      {/* <div className="partners__balance-cmp">
        <span className="partners__balance-cmp__info">
          {wallet ? wallet.balance : "0"}
        </span>
        <span className="partners__balance-cmp__text">Баланс cmp</span>
      </div> */}
    </div>
  );
};

export default Partners;
