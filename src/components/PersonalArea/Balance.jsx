import React from "react";
import "../../sass/personalArea/balance.sass";
import refreshLogo from "../../images/PersonalArea/Refresh.png";
const Balance = ({ wallets, currentWallet, setCurrentWallet }) => {
  console.log("wallets");
  console.log(wallets);
  return (
    <div className="balance">
      <div className="balance__top-block">
        <div className="balance__select">
          <select
            value={currentWallet}
            onChange={(event) => setCurrentWallet(event.target.value)}
          >
            {wallets.map((v, i) => (
              <option value={i}>{v.currency}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="balance__bottom-block">
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
              {wallets.length > 0 ? wallets[currentWallet].balance : "0"}
              <span className="dollar">/$</span>
            </p>
          </div>
          <p className="balance__dash__orange">&mdash;</p>
          <p className="balance__naming">Ваш баланс</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;