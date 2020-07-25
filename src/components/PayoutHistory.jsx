import React from "react";
import "../sass/payoutHistory.sass";
const PayoutHistory = () => {
  return (
    <div className="payout-history">
      <div className="payout-history__menu">
        <p className="payout-history__title">История выплат</p>
        <button className="payout-history__download-button">
          Скачать отчет
        </button>
      </div>
      <table className="payout-history__table">
        <tr>
          <td>22.01.2020</td>
          <td>В обработке</td>
          <td>135 токенов</td>
        </tr>
        <tr className="payout-history__tr-td__gray">
          <td>22.01.2020</td>
          <td>В обработке</td>
          <td>135 токенов</td>
        </tr>
        <tr>
          <td>22.01.2020</td>
          <td>В обработке</td>
          <td>135 токенов</td>
        </tr>
      </table>
    </div>
  );
};

export default PayoutHistory;
