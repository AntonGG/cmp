import React from "react";
import "../../sass/auth/popup.sass";

const PopupError = ({ isPopup, popupClose, error }) => {
  if (!isPopup) {
    return;
  }
  let errorMsg = "";
  
  return (
    <div className="popup">
      <p>{errorMsg}</p>

      <div className="popup__button" onClick={popupClose}>
        <p onClick={popupClose}>Ок</p>
      </div>
    </div>
  );
};

export default PopupError;
