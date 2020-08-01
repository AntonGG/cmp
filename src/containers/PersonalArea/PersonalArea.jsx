import React, { Component } from "react";
import Balance from "../../components/PersonalArea/Balance";
import PaymentHistory from "../../components/PaymentHistory";
import "../../sass/personalArea/personalArea.sass";
import Partners from "../../components/PersonalArea/Partners";
import LastCompletedTasks from "../../components/PersonalArea/LastCompletedTasks";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import CashOut from "../../components/CashOut";
import CashIn from "../../components/CashIn";
import { connect } from "react-redux";
import { getWalletsAndPartners, setCurrentWallet } from "../../actions/User";

class PersonalArea extends Component {
  componentDidMount() {
    this.props.onGetWalletsAndPartners();
  }
  render() {
    return (
      <div className="personal-area">
        <p className="title">Личный кабинет</p>
        <MenuPersonalArea type={true} />
        <div className="personal-area__body">
          <div>
            <Balance
              wallets={this.props.wallets}
              currentWallet={this.props.currentWallet}
              setCurrentWallet={this.props.onSetCurrentWallet}
              onGetWallets={this.props.onGetWalletsAndPartners}
              currency_prices={this.props.currency_prices}
            />
            <CashIn
              wallets={this.props.wallets}
              currentWallet={this.props.currentWallet}
            />
            <CashOut />
            <PaymentHistory payment_history={this.props.payment_history} />
          </div>
          <div>
            <Partners
              wallet={this.props.wallets.find((v) => v.currency === "CMP")}
              inviters={this.props.inviters}
            />
            <LastCompletedTasks last_tasks={this.props.last_tasks} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  inviters: state.User.inviters,
  wallets: state.User.wallets,
  currentWallet: state.User.currentWallet,
  last_tasks: state.User.last_tasks,
  payment_history: state.User.payment_history,
  currency_prices: state.User.currency_prices,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWalletsAndPartners: () => {
      console.log("onGetWalletsAndPartners");
      dispatch(getWalletsAndPartners());
    },
    onSetCurrentWallet: (currentWallet) => {
      dispatch(setCurrentWallet(currentWallet));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);
