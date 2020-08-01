import React, { Component } from "react";
import "../../sass/auth/auth.sass";
import Menu from "../../components/Auth/Menu";
import { getMnemonic, popupClose, signUp } from "../../actions/Auth/index";
import { connect } from "react-redux";
import copyToClipboard from "../../utils/copyToClipboard";
import Loading from "../../components/Loading";
import ErrorBlock from "../../components/ErrorBlock";
import Popup from "../../components/Auth/Popup";
class SignUp extends Component {
  render() {
    const {
      mnemonic,
      onGetMnemonic,
      onSignUp,
      history,
      invite,
      isPopup,
      popupMsg,
      onPopupClose,
    } = this.props;

    return (
      <div className="auth">
        <Menu type={false} />
        <div className="auth__text-area">
          <h3>Регистрация</h3>
          <div className="auth__input-div">
            <input
              className="auth__input"
              placeholder="Мнемоническая фраза"
              readOnly="readOnly"
              value={mnemonic}
            />
            <div
              onClick={() => copyToClipboard(mnemonic)}
              className="auth__copy-button"
            >
              <p>Копировать</p>
            </div>
          </div>
          <div onClick={() => onGetMnemonic()} className="auth__button">
            {this.props.isLoadingGetMnemonic ? (
              <Loading />
            ) : (
              "Получить мнемоническую фразу"
            )}
          </div>
          <div
            onClick={() => onSignUp(mnemonic, history, invite)}
            className="auth__button"
          >
            {this.props.isLoadingSignUp ? <Loading /> : "Зарегистрироваться"}
          </div>
          <Popup
            isPopup={isPopup}
            popupMsg={popupMsg}
            popupClose={onPopupClose}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  invite: state.App.invite,
  mnemonic: state.User.mnemonic,
  inviteId: state.User.inviteId,
  isLoadingGetMnemonic: state.App.isLoadingGetMnemonic,
  isLoadingSignUp: state.App.isLoadingSignUp,
  isPopup: state.App.isPopup,
  popupMsg: state.App.popupMsg,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMnemonic: () => {
      dispatch(getMnemonic());
    },
    onSignUp: (mnemonic, history, invite) => {
      dispatch(signUp(mnemonic, history, invite));
    },
    onPopupClose: () => {
      dispatch(popupClose());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
