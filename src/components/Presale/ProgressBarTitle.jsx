import React from "react";
import progressBar from "../../images/Presale/progressBar.svg";
import "../../sass/presale/progressBar.sass";
const ProgressBarTitle = ({ ico_info }) => {
  if (!ico_info) {
    return "";
  }
  const percents = (ico_info.selled_coins / ico_info.total_amount_sell) * 100;
  console.log("percents", percents);
  return (
    <div className="progress-bar">
      <img className="progress-bar__logo" src={progressBar} alt="ProgressBar" />
      <div
        style={{ width: percents > 9.5 ? percents : "9.5%" }}
        className="progress-ber__filler"
      ></div>
    </div>
  );
};

export default ProgressBarTitle;
