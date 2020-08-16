import React from "react";
import progressBar from "../../images/Presale/progressBar.svg";
import "../../sass/presale/progressBarBody.sass";
const ProgressBarBody = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percents = (ico_info.selled_coins / ico_info.total_amount_sell) * 100;
  console.log("percents", percents);
  return (
    <div className="progress-bar-body">
      <p className="progress-bar-body__title">Шкала прогресса</p>
      <div className="progress-bar-body__container">
        
        <div
          style={{ width: percents > 9.5 ? percents : "9.5%" }}
          className="progress-bar-body__filler"
        ></div>
        <div className="progress-bar-body__base"></div>
      </div>
    </div>
  );
};

export default ProgressBarBody;
