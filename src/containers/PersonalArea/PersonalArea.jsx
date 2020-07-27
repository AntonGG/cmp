import React, { Component } from "react";
import Balance from "../../components/PersonalArea/Balance";
import PayoutHistory from "../../components/PayoutHistory";
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
    // this.props.onGetWalletsAndPartners();
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
            />
            <CashIn  wallets={this.props.wallets}
              currentWallet={this.props.currentWallet}/>
            <CashOut />
            <PayoutHistory />
          </div>
          <div>
            <Partners
              wallet={this.props.wallets.find((v) => v.currency === "CMP")}
              inviters={this.props.inviters}
            />
            <LastCompletedTasks />
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
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetWalletsAndPartners: () => {
      dispatch(getWalletsAndPartners());
    },
    onSetCurrentWallet: (currentWallet) => {
      dispatch(setCurrentWallet(currentWallet));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);
