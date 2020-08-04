import React from "react";
import "../sass/cashOut.sass";
const CashOut = () => {
  return (
    <div className="cash-out">
      <p>Вывести CMP</p>
      <div className="cash-out__input">
        <input placeholder="Введите ваш адрес CMP" />
        <button>Выплатить</button>
      </div>
    </div>
  );
};

export default CashOut;
