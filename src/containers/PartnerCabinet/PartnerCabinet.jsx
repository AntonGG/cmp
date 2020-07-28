import React, { Component } from "react";
import { connect } from "react-redux";
import { getWalletsAndPartners, setCurrentWallet } from "../../actions/User";
import CashOut from "../../components/CashOut";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import Balance from "../../components/PartnerCabinet/Balance";
import ListedUsers from "../../components/PartnerCabinet/ListedUsers";
import PartnerUrl from "../../components/PartnerCabinet/PartnerUrl";
import PayoutHistory from "../../components/PayoutHistory";
import "../../sass/partnerCabinet/partnerCabinet.sass";
export class PartnerCabinet extends Component {
  render() {
    return (
      <div className="partner-cabinet-area">
        <p className="partner-cabinet__title">Партнерский кабинет</p>
        <MenuPersonalArea type={false} />
        <div className="partner-cabinet-area__body">
          <div className="partner-cabinet__left-block">
            <PartnerUrl partnerUrl={this.props.partnerUrl} />
            <ListedUsers />
          </div>
          <div className="partner-cabinet__right-block">
            <Balance
              wallets={this.props.wallets}
              currentWallet={this.props.currentWallet}
              setCurrentWallet={this.props.onSetCurrentWallet}
            />
            <CashOut />
            <PayoutHistory />
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
  partnerUrl: state.User.partnerUrl,
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
