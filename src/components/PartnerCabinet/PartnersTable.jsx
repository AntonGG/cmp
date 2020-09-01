import React from "react";
import dateFormat from "dateformat";
import "../../sass/partnerCabinet/partnersTable.sass";

const PartnersTable = ({ partners }) => {
  if (!partners) {
    return "";
  }
  return (
    <div className="partners-table">
      <div className="partners-table__menu">
        <p className="partners-table__title">Партнеры</p>
        <button className="partners-table__download-button">
          Скачать отчет
        </button>
      </div>
      <hr />
      {partners.map((partner, i) => (
        <div
          key={i}
          className={`partners-table__item ${
            i % 2 === 0 ? "" : "partners-table__item__active"
          }`}
        >
          <div className="partners-table__first-div">
            <p className="partners-table__date">{`${dateFormat(
              partner.date,
              "dd.mm.yyyy"
            )} - ${dateFormat(partner.date, "HH:MM")}`}</p>
          </div>
          <div className="partners-table__middle-div">
            <p className="partners-table__id">{partner.id}</p>
          </div>
          <div className="partners-table__last-div">
            <p className="partners-table__balance">{partner.balance}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnersTable;
