import React from "react";
import "../../sass/personalArea/cashOut.sass";
const CashOut = () => {
  return (
    <div className="cash-out">
      <p>Вывести средства</p>
      <input placeholder="Введите ваш адрес"/>
      <button>Выплатить</button>
    </div>
  );
};

export default CashOut;
