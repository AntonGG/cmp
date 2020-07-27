import React from "react";
import "../sass/cashIn.sass";
import copyToClipboard from "../utils/copyToClipboard";

const CashIn = ({ wallets, currentWallet }) => {
  return (
    <div className="cash-in">
      <p>Пополнить</p>
      <div className="cash-in__input">
        <input
          placeholder="Ваш адрес"
          value={wallets[currentWallet] ? wallets[currentWallet].address : ""}
        />
        <div
          onClick={copyToClipboard(
            wallets[currentWallet] ? wallets[currentWallet].address : ""
          )}
          className="cash-in__copy-button"
        >
          <svg
            fill="#fff"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CashIn;
