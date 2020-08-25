import React from "react";
import progressBar from "../../images/Presale/progressBar.svg";
import "../../sass/presale/progressBarBody.sass";
const ProgressBarBody = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percents = (ico_info.selled_coins / ico_info.total_amount_sell) * 100;
  return (
    <div className="progress-bar-body">
      <p className="progress-bar-body__title">Шкала прогресса</p>
      <div className="progress-bar-body__title-container">
        <div className="progress-bar-body__title-item-left">
          <p>Starting price</p>
          <p className="progress-bar-body__title-price">0.15 USDT</p>
          <p>Presale Phase</p>
        </div>
        <div className="progress-bar-body__title-item-right">
          <p>Итоговая цена </p>
          <p>100,000,000 CMP</p>
          <p>Final market cap: 51,076,800 USD</p>
        </div>
      </div>
      <div className="progress-bar-body__container">
        <div
          style={{ width: percents > 9.5 ? percents : "60%" }}
          className="progress-bar-body__filler-capitalization"
        ></div>
        <div
          style={{ width: percents > 9.5 ? percents : "30%" }}
          className="progress-bar-body__filler-price"
        ></div>
        <div
          style={{ width: percents > 9.5 ? percents : "15%" }}
          className="progress-bar-body__filler-volume"
        ></div>
        <div className="progress-bar-body__base"></div>
      </div>
    </div>
  );
};

export default ProgressBarBody;
