import React from "react";
import "../../sass/personalArea/rate.sass";
import getCurrencyFullName from "../../utils/getCurrencyName";
const Rate = ({ currency_prices }) => {
  console.log("currency_prices", currency_prices);
  return (
    <div className="rate">
      <div className="rate__title">
        <p className="rate__title-text">Курс</p>
      </div>
      <div className="rate-table">
        {currency_prices &&
          currency_prices.map((price, i) => (
            <div key={i} className="rate-table__item">
              <div className="rate-table__item-left">
                <p>{getCurrencyFullName(price.currency)}</p>
              </div>
              <div className="rate-table__item-right">
                <p>
                  1 {price.currency} = {price.price} CMP
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Rate;
