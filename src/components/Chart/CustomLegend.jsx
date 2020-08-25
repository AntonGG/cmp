import React from "react";
import PriceLogo from "../../images/Presale/price.svg";
import MarketcapLogo from "../../images/Presale/marketcap.svg";
import VolumeLogo from "../../images/Presale/volume.svg";
import "../../sass/chart/customLegend.sass";

const CustomLegend = ({ ico_info }) => {
  const clouds = ico_info.clouds;
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
        <img className="custom-legend__logo" src={MarketcapLogo} alt="MarketcapLogo" />
        <div>
          <p className="custom-legend__item-title">Marketcap</p>
          <p className="custom-legend__item-volume">{clouds.marketcap} USD</p>
        </div>
      </div>
      <div className="custom-legend__item">
        <img className="custom-legend__logo" src={VolumeLogo} alt="VolumeLogo" />
        <div>
          <p className="custom-legend__item-title">Volume</p>
          <p className="custom-legend__item-volume">{clouds.volume} USD</p>
        </div>
      </div>
      <div className="custom-legend__item">
        <img className="custom-legend__logo" src={PriceLogo} alt="PriceLogo" />
        <div>
          <p className="custom-legend__item-title">Price</p>
          <p className="custom-legend__item-volume">{clouds.price} %</p>
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
