import React from "react";
import "../../sass/chart/customLegend.sass";

const CustomLegend = () => {
  const logo = () => (
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="27" r="27" fill="#ECECEC" />
    </svg>
  );
  return (
    <div className="custom-legend">
      <div className="custom-legend__item">
        {logo()}
        <div>
          <p className="custom-legend__item-title">Merketcap</p>
          <p className="custom-legend__item-volume">170 USD</p>
        </div>
      </div>
      <div className="custom-legend__item">
        {logo()}
        <div>
          <p className="custom-legend__item-title">Merketcap</p>
          <p className="custom-legend__item-volume">170 USD</p>
        </div>
      </div>
      <div className="custom-legend__item">
        {logo()}
        <div>
          <p className="custom-legend__item-title">Merketcap</p>
          <p className="custom-legend__item-volume">170 USD</p>
        </div>
      </div>
      <div className="custom-legend__info">
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" fill="#3B3B3B" />
          </svg>
          <p>Объем</p>
        </div>
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" fill="#69E53E" />
          </svg>
          <p>Цена</p>
        </div>
        <div className="custom-legend__info-item">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect width="14" height="14" stroke="#3B3B3B" />
          </svg>
          <p>Капитализация</p>
        </div>
      </div>
    </div>
  );
};

export default CustomLegend;
