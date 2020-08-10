import React from "react";
import "../../sass/cashOutPopup.sass";
import copyToClipboard from "../../utils/copyToClipboard";

const CashOutPopup = ({ wallet, isPopup, setIsPopupFalse }) => {
  if (!isPopup) {
    return "";
  }

  return (
    <div className="cash-out-popup">
      <div className="cash-out-popup__container">
        <div className="cash-out-popup__title">
          <p>Вывод CMP</p>

          <div onClick={() => setIsPopupFalse()}>
            <div class="cl-btn-7"></div>
          </div>
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
          <div className="cash-out-popup__item">
            <p>Сумма вывода</p>
            <input
              className="cash-out-popup__input"
              placeholder="Введите сумму"
            />
          </div>
          <div className="cash-out-popup__item">
            <p>Адрес получателя CMP</p>
            <input className="cash-out-popup__input" placeholder="Ваш адрес" />
          </div>
        </div>
        <div className="cash-out-popup__item-button">
          <div className="cash-out-popup__button">
            <p>Вывести</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashOutPopup;
