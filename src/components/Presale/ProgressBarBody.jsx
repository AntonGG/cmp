import React from "react";
import progressBar from "../../images/Presale/progressBar.svg";
import "../../sass/presale/progressBarBody.sass";
const ProgressBarBody = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percentsStartingPrice =
    (ico_info.scales2.starting_price / ico_info.scales2.final_market_cup) * 100;
  const percentsYesterdayPrice =
    (ico_info.scales2.yesterday_price / ico_info.scales2.final_market_cup) *
    100;
  const percentsCurrentPrice =
    (ico_info.scales2.current_price / ico_info.scales2.final_market_cup) * 100;
  return (
    <div className="progress-bar-body">
      <p className="progress-bar-body__title">Шкала прогресса</p>
      <div className="progress-bar-body__title-container">
        <div className="progress-bar-body__title-item-left">
          <p>Starting price</p>
          <p className="progress-bar-body__title-price">
            {`${ico_info.scales2.starting_price} USDT`}
          </p>
          <p>Presale Phase</p>
        </div>
        <div className="progress-bar-body__title-item-right">
          <p>Итоговая цена </p>
          {`${ico_info.scales2.finale_price} CMP`}
          <p>{`Final market cap: ${ico_info.scales2.final_market_cup} USD`}</p>
        </div>
      </div>
      <div className="progress-bar-body__container">
        <div
          style={{
            width: percentsYesterdayPrice > 15 ? percentsYesterdayPrice : "27%",
          }}
          className="progress-bar-body__filler-yesterday-price"
        >
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.yesterday_price} USDT`}</p>
        </div>
        <div
          style={{
            width: percentsCurrentPrice > 20 ? percentsCurrentPrice : "17%",
          }}
          className="progress-bar-body__filler-current-price"
        >
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.currency_price} USDT`}</p>
        </div>
        <div
          style={{
            width: percentsStartingPrice > 10 ? percentsStartingPrice : "8%",
          }}
          className="progress-bar-body__filler-starting-price"
        >
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.starting_price} USDT`}</p>
        </div>
        <div className="progress-bar-body__base">
          <p className="progress-bar-body__filler-text">{`${ico_info.scales2.finale_price} USDT`}</p>
        </div>
      </div>

      <div className="progress-bar-body__footer-container">
        <div className="progress-bar-body__footer-item-right">
          <p>
            {`Expected supply at network launch ${ico_info.scales2.network_launch}`}
          </p>
          <p>{`${ico_info.scales2.total_amount} CMP`} </p>
          <p>
            {`Future market cap: ${ico_info.scales2.future_market_cap} USD`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarBody;
