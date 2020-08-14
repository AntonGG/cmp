import React from "react";
import ProgressBar from "./ProgressBar";
import titleButton from "../../images/Presale/titleButton.svg";
import "../../sass/presale/presaleTitle.sass";
const PresaleTitle = ({ ico_info }) => {
  return (
    <div className="presale-title">
      <div className="presale-title__left">
        <p className="presale-title__text">Предпродажа монет</p>
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
          {ico_info ? ico_info.selled_coins : "0"} USD
        </p>
        <ProgressBar ico_info={ico_info} />
        <div className="presale-title__vertical-line-2"></div>
        <p className="font_bold presale-title__coins-left">{ico_info ? ico_info.coins_left : "0"} USD</p>
      </div>
    </div>
  );
};

export default PresaleTitle;
