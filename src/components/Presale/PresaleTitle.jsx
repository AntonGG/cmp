import React from "react";
import ProgressBar from "./ProgressBarTitle";
import titleButton from "../../images/Presale/titleButton.png";
import "../../sass/presale/presaleTitle.sass";
import ProgressBarTitle from "./ProgressBarTitle";
const PresaleTitle = ({ ico_info }) => {
  return (
    <div className="presale-title">
      <div className="presale-title__left">
        <p className="presale-title__text">Private Pre-sale</p>
        <p>
          Private Pre-sale - первоначальный этап продажи CMP coin. В продажу
          поступят 1 000 000 CMP coin. Этап будет ограничен по времени. На
          данном этапе планируется привлечь ограниченное количество инвесторов.
        </p>
        <div className="presale-title__button">
          <img src={titleButton} alt="TitleButton" />
        </div>
      </div>
      <div className="presale-title__right">
        <div className="presale-title__vertical-line-1"></div>
        <p className="font_bold presale-title__selled-coins">
          Продано: {ico_info ? ico_info.selled_coins : "0"} CMP
        </p>
        <ProgressBarTitle ico_info={ico_info} />
        <div className="presale-title__vertical-line-2"></div>
        <p className="font_bold presale-title__coins-left">
          Осталось: {ico_info ? ico_info.coins_left : "0"} CMP
        </p>
      </div>
    </div>
  );
};

export default PresaleTitle;
