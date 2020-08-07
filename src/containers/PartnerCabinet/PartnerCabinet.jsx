import React, { Component } from "react";
import { connect } from "react-redux";
import { getWalletsAndPartners, setCurrentWallet } from "../../actions/User";
import CashOut from "../../components/CashOut";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import Balance from "../../components/PersonalArea/Balance";
import ListedUsers from "../../components/PartnerCabinet/ListedUsers";
import PartnerUrl from "../../components/PartnerCabinet/PartnerUrl";

import "../../sass/partnerCabinet/partnerCabinet.sass";
import PaymentHistory from "../../components/PaymentHistory";
export class PartnerCabinet extends Component {
  componentDidMount() {
    this.props.onGetWalletsAndPartners();
  }
  render() {
    return (
      <div className="partner-cabinet-area">
        <p className="partner-cabinet__title">Партнерский кабинет</p>
        <MenuPersonalArea type={false} />
        <div className="partner-cabinet-area__body">
          <div className="partner-cabinet__left-block">
            <PartnerUrl inviterlink={this.props.inviterlink} />
            <ListedUsers />
          </div>
          <div className="partner-cabinet__right-block">
            <Balance
              wallets={this.props.wallets}
              currentWallet={this.props.currentWallet}
              setCurrentWallet={this.props.onSetCurrentWallet}
              onGetWallets={this.props.onGetWalletsAndPartners}
            />
            <CashOut />
            <PaymentHistory payment_history={this.props.payment_history} />
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
  lastCompletedTasks: state.User.lastCompletedTasks,
  inviterlink: state.User.inviterlink,
  payment_history: state.User.payment_history,
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
export default connect(mapStateToProps, mapDispatchToProps)(PartnerCabinet);
