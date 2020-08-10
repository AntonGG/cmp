import React, { Component } from "react";
import PaymentHistory from "../../components/PaymentHistory";
import "../../sass/personalArea/personalArea.sass";
import Partners from "../../components/PersonalArea/Partners";
import LastCompletedTasks from "../../components/PersonalArea/LastCompletedTasks";
import MenuPersonalArea from "../../components/MenuPersonalArea";
import { connect } from "react-redux";
import {
  convertCrypto,
  getWalletsAndPartners,
  setCurrentWallet,
} from "../../actions/User";
import BalanceTable from "../../components/PersonalArea/BalanceTable";
import Rate from "../../components/PersonalArea/Rate";

class PersonalArea extends Component {
  componentDidMount() {
    this.props.onGetWalletsAndPartners();
  }
  render() {
    const {
      wallets,
      currentWallet,
      onSetCurrentWallet,
      onGetWalletsAndPartners,
      currency_prices,
      onConvertCrypto,
      payment_history,
      inviters,
      last_tasks,
    } = this.props;
    return (
      <div className="personal-area">
        <p className="title">Личный кабинет</p>
        <MenuPersonalArea type={true} />
        <div className="personal-area__body">
          <div>
            <BalanceTable
              wallets={wallets}
              currentWallet={currentWallet}
              setCurrentWallet={onSetCurrentWallet}
              onGetWallets={onGetWalletsAndPartners}
              currency_prices={currency_prices}
              convertCrypto={onConvertCrypto}
            />
            <PaymentHistory payment_history={payment_history} />
          </div>
          <div>
            <Partners
              wallet={wallets.find((v) => v.currency === "CMP")}
              inviters={inviters}
            />
            <LastCompletedTasks last_tasks={last_tasks} />
            <Rate
              currency_prices={currency_prices}
              cmpWallet={wallets.find((v) => v.currency === "CMP")}
            />
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
    onConvertCrypto: (coin_code) => {
      dispatch(convertCrypto(coin_code));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalArea);
