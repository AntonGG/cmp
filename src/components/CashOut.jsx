import React from "react";
import "../sass/cashOut.sass";
const CashOut = () => {
  return (
    <div className="cash-out">
      <p>Вывести средства</p>
      <div className="cash-out__input">
        <input placeholder="Введите ваш адрес" />
        <button>Выплатить</button>
      </div>
    </div>
  );
};

export default CashOut;
