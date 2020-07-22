import React from "react";
import "../../sass/personalArea/balance.sass";
import refreshLogo from "../../images/PersonalArea/Refresh.png";
const Balance = () => {
  return (
    <div className="balance">
      <div>
        <p className="balance__minutes">1027</p>
        <p className="balance__dash__green">&mdash;</p>
        <p className="balance__naming">Минут</p>
      </div>
      <div>
        <p className="balance__current-rate">0.93</p>
        <p className="balance__dash__green">&mdash;</p>
        <p className="balance__naming"> Текущий курс</p>
      </div>
      <div className="balance__div__black">
        <div className="balance__refresh-logo-div">
          <img src={refreshLogo} alt="Logo" />
          <p className="balance__count">
            930<span className="dollar">/$</span>
          </p>
        </div>
        <p className="balance__dash__orange">&mdash;</p>
        <p className="balance__naming">Ваш баланс</p>
      </div>
    </div>
  );
};

export default Balance;
