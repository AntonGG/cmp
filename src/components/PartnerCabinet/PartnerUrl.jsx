import React from "react";
import "../../sass/partnerCabinet/partnerUrl.sass";

const PartnerUrl = ({ partnerUrl }) => {
  console.log(partnerUrl);
  return (
    <div className="partner-url">
      <p>Ваша партнерская ссылка</p>
      <div className="partner-url__input-div">
        <input
          className="partner-url__input"
          readOnly="readOnly"
          value={partnerUrl}
        />
        <div className="partner-url__copy-button">
          <svg
            fill="#fff"
            viewBox="0 0 24 24"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M16 1H4a2 2 0 00-2 2v14h2V3h12V1zm3 4H8a2 2 0 00-2 2v14c0 1.1.9 2 2 2h11a2 2 0 002-2V7a2 2 0 00-2-2zm0 16H8V7h11v14z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PartnerUrl;
