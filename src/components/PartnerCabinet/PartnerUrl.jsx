import React from "react";
import "../../sass/partnerCabinet/partnerUrl.sass";
import copyToClipboard from "../../utils/copyToClipboard";

const PartnerUrl = ({ inviterlink }) => {
  return (
    <div className="partner-url">
      <p>Ваша партнерская ссылка</p>
      <div className="partner-url__input-div">
        <input
          className="partner-url__input"
          readOnly="readOnly"
          value={inviterlink}
        />
        <div
          onClick={() => copyToClipboard(inviterlink)}
          className="auth__copy-button"
        >
          <p>Копировать</p>
        </div>
      </div>
    </div>
  );
};

export default PartnerUrl;
