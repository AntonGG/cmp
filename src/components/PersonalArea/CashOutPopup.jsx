import React, { useEffect } from "react";
import { useState } from "react";
import "../../sass/cashOutPopup.sass";
import StatusPopup from "../StatusPopup";

const CashOutPopup = ({
  wallet,
  isCashOutPopup,
  setIsPopupFalse,
  withdrawCmp,
}) => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0.01);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsPopupFalse();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  if (!isCashOutPopup) {
    return "";
  }

  return (
    <div className="popup__screen">
      <div className="popup__container">
        <div onClick={() => setIsPopupFalse()}>
          <div className="cl-btn-7"></div>
        </div>
        <div className="cash-out-popup__title">
          <p>Вывод CMP</p>
        </div>
        <div className="cash-out-popup__table">
          <div className="cash-out-popup__item">
            <p>Доступная сумма для вывода</p>
            <p>{wallet.balance}</p>
          </div>
          <div className="cash-out-popup__item">
            <p>Комиссия</p>
            <p>0.1 CMP</p>
          </div>
          <div className="cash-out-popup__item responsive-input-container">
            <p>Сумма вывода</p>
            <input
              onChange={(event) => setAmount(event.target.value)}
              value={amount}
              className="cash-out-popup__input"
              placeholder="Введите сумму"
              type="number"
              step="0.01"
            />
          </div>
          <div className="cash-out-popup__item responsive-input-container">
            <p>Адрес получателя CMP</p>
            <input
              onChange={(event) => setAddress(event.target.value)}
              value={address}
              className="cash-out-popup__input"
              placeholder="Ваш адрес"
            />
          </div>
        </div>
        <div className="cash-out-popup__item-button">
          <div
            onClick={() => withdrawCmp(address, amount)}
            className="cash-out-popup__button"
          >
            <p>Вывести</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOutPopup;
