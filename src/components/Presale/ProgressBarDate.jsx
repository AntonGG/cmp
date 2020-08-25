import React from "react";
import "../../sass/presale/progressBarDate.sass";

const ProgressBarDate = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percents = (ico_info.selled_coins / ico_info.total_amount_sell) * 100;
  return (
    <div className="progress-bar-date">
      <div className="progress-bar-date__title">
        <div className="progress-bar-date__title-item-left">
          <p>Jun 10, 2020</p>
          <p>rICO start</p>
        </div>
        <div className="progress-bar-date__title-item-right">
          <p>Sen 30, 2020 </p>
          <p>rICO end</p>
        </div>
      </div>
      <div className="progress-bar-date__container">
        <div
          className="progress-bar-date__filler-base"
          style={{ width: percents > 9.5 ? percents : "60%" }}
        >
          <div className="progress-bar-date__filler-line-left"></div>
          <div className="progress-bar-date__filler-gray"></div>
          <div className="progress-bar-date__filler-line-right"></div>
        </div>
        <div className="progress-bar-date__base"></div>
        <div className="progress-bar-date__base-line-right"></div>
      </div>
    </div>
  );
};

export default ProgressBarDate;
