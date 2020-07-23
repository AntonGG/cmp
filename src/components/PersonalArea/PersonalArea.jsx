import React from "react";
import Balance from "./Balance";
import Menu from "./Menu";
import PayoutHistory from "./PayoutHistory";
import WithdrawFunds from "./CashOut";
import "../../sass/personalArea/personalArea.sass";
import Partners from "./Partners";
import LastCompletedTasks from "./LastCompletedTasks";
const PersonalArea = () => {
  return (
    <div className="personal-area">
      <p className="title">Личный кабинет</p>
      <Menu type={true} />
      <div className="personal-area__body">
        <div>
          <Balance />
          <WithdrawFunds />
          <PayoutHistory />
        </div>
        <div>
          <Partners />
          <LastCompletedTasks />
        </div>
      </div>
    </div>
  );
};

export default PersonalArea;
