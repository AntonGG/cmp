import React from "react";
import dateFormat from "dateformat";
import "../sass/paymentHistory.sass";

const paymentStatusSwitch = (status) => {
  switch (status) {
    case "WALLET_CREATED":
      return "Кошелек создан";
      break;

    default:
      return "";
      break;
  }
};

const PaymentHistory = ({ payment_history }) => {
  return (
    <div className="payment-history">
      <div className="payment-history__menu">
        <p className="payment-history__title">История транзакций</p>
        <button className="payment-history__download-button">
          Скачать отчет
        </button>
      </div>
      <div className="payment-history__table">
        {payment_history &&
          payment_history.map((payment, i) => (
            <div key={i} className="payment-history__item">
              <div className="payment-history__first-div">
                <p>{dateFormat(payment.date, "HH:MM")}</p>
                <p>{dateFormat(payment.date, "dd.mm.yyyy")}</p>
              </div>
              <div className="payment-history__middle-div">
                <p>{paymentStatusSwitch(payment.status)}</p>
                <p className="payment-history__address">{payment.address}</p>
              </div>
              <div className="payment-history__last-div">
                <p>{payment.amount}</p>
                <p>{payment.val}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PaymentHistory;
