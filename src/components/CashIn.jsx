import React from "react";
import "../sass/cashIn.sass";
import copyToClipboard from "../utils/copyToClipboard";

const CashIn = ({ wallets, currentWallet }) => {
  return (
    <div className="cash-in">
      <p className="cash-in__title">Пополнить</p>
      <div className="cash-in__input">
        <input
          placeholder="Ваш адрес"
          value={wallets[currentWallet] ? wallets[currentWallet].address : ""}
        />
        <div
          onClick={() =>
            copyToClipboard(
              wallets[currentWallet] ? wallets[currentWallet].address : ""
            )
          }
          className="cash-in__copy-button"
        >
          <p>Копировать</p>
        </div>
      </div>
    </div>
  );
};

export default CashIn;
