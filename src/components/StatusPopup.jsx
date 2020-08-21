import React from "react";
import "../sass/statusPopup.sass";

const StatusPopup = ({ isPopup, popupClose, isError, statusMsg }) => {
  if (!isPopup) {
    return "";
  }

  return (
    <div className="status-popup">
      <div className="status-popup__container">
        {isError && <p>Ошибка</p>}
        <p>{statusMsg}</p>
        <div className="status-popup__container-button">
          <div className="status-popup__button" onClick={popupClose}>
            <p onClick={popupClose}>ОK</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPopup;
