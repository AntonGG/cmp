import React from "react";
import Balance from "./Balance";
import Menu from "./Menu";
import PayoutHistory from "./PayoutHistory";
import WithdrawFunds from "./CashOut";
import "../../sass/personalArea/personalArea.sass";
const PersonalArea = () => {
  return (
    <div className="personal-area">
      <p className="title">Личный кабинет</p>
      <Menu type={true} />
      <Balance />
      <WithdrawFunds />
      <PayoutHistory />
    </div>
  );
};

export default PersonalArea;
