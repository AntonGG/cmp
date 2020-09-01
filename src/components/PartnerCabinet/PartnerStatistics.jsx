import React from "react";
import dateFormat from "dateformat";
import "../../sass/partnerCabinet/partnerStatistics.sass";

const PartnerStatistics = ({ referrals }) => {
  if (!referrals) {
    return "";
  }
  return (
    <div className="partner-statistics">
      <div className="partner-statistics__menu">
        <p className="partner-statistics__title">Партнеры</p>
        <button className="partner-statistics__download-button">
          Скачать отчет
        </button>
      </div>
      <hr />
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">Количество партнеров</p>
        <p className="partner-statistics__data">{referrals.amount}</p>
      </div>
      <div className="partner-statistics__item">
        <p className="partner-statistics__text">Открытые линии</p>
        <p className="partner-statistics__data">{referrals.lines}</p>
      </div>
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">Стейк</p>
        <p className="partner-statistics__data">{referrals.fullstack}</p>
      </div>
      <div className="partner-statistics__item">
        <p className="partner-statistics__text">Доля стейка</p>
        <p className="partner-statistics__data">{referrals.partofstack}</p>
      </div>
      <div className="partner-statistics__item partner-statistics__item__active">
        <p className="partner-statistics__text">Партнерское время</p>
        <p className="partner-statistics__data">{referrals.partners_time}</p>
      </div>
    </div>
  );
};

export default PartnerStatistics;
