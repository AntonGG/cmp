import React from "react";
import "../../sass/auth/popup.sass";
const Popup = ({ isPopup, popupMsg, popupClose }) => {
  return (
    isPopup && (
      <div className="popup">
        <p>
          Обязательно скопируйте и сохраните в защищенном месте вашу
          мнемоническую фразу для входа в кабинет
        </p>
        <p>Теперь переключитесь на вкладку входа и войдите в кабинет</p>
        <div className="popup__button" onClick={popupClose}>
          <p onClick={popupClose}>Ок</p>
        </div>
      </div>
    )
  );
};

export default Popup;
