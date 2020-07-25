import React from "react";
import Balance from "./Balance";
import PayoutHistory from "../PayoutHistory";
import "../../sass/personalArea/personalArea.sass";
import Partners from "./Partners";
import LastCompletedTasks from "./LastCompletedTasks";
import MenuPersonalArea from "../MenuPersonalArea";
import CashOut from "../CashOut";

const PersonalArea = () => {
  return (
    <div className="personal-area">
      <p className="title">Личный кабинет</p>
      <MenuPersonalArea type={true} />
      <div className="personal-area__body">
        <div>
          <Balance />
          <CashOut />
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
