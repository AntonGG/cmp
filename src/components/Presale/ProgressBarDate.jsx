import React from "react";
import "../../sass/presale/progressBarBody.sass";

const ProgressBarDate = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percents = (ico_info.selled_coins / ico_info.total_amount_sell) * 100;
  return (
    <div className="progress-bar-body">
      <div className="progress-bar-body__progress-title">
        <div className="progress-bar-body__progress-title-item">
          <p>Jun 10, 2020</p>
          <p>rICO start</p>
        </div>
        <div className="progress-bar-body__progress-title-item">
          <p>Итоговая цена </p>
          <p>100,000,000 LYXe</p>
          <p>Final market cap: 51,076,800 USD</p>
        </div>
      </div>
      <div className="progress-bar-body__progress-container">
        <div
          style={{ width: percents > 9.5 ? percents : "60%" }}
          className="progress-bar-body__filler-capitalization"
        ></div>
        <div className="progress-bar-body__base"></div>
      </div>
    </div>
  );
};

export default ProgressBarDate;
