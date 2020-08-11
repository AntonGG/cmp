import React, { useEffect } from "react";
import "../../sass/cashInPopup.sass";
import copyToClipboard from "../../utils/copyToClipboard";

const CashInPopup = ({ wallet, isPopup, setIsPopupFalse }) => {
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

  if (!isPopup) {
    return "";
  }

  return (
    <div className="cash-in-popup">
      <div className="cash-in-popup__container">
        <div className="cash-in-popup__title">
          <p>Пополнить {wallet.currency}</p>

          <div onClick={() => setIsPopupFalse()}>
            <div className="cl-btn-7"></div>
          </div>
        </div>
        <div className="cash-in-popup__input">
          <input
            placeholder="Ваш адрес"
            defaultValue={wallet ? wallet.address : ""}
          />
          <div
            onClick={() => copyToClipboard(wallet ? wallet.address : "")}
            className="cash-in-popup__copy-button"
          >
            <p>Копировать</p>
          </div>
        </div>
        <p>
          Для пополнения кошелька отправляйте на этот адрес только{" "}
          {wallet.currency}. Отправка монеты или токена, кроме {wallet.currency}{" "}
          по этому адресу может привести к потере средств.
        </p>
      </div>
    </div>
  );
};

export default CashInPopup;
