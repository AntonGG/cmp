import React, { Component } from "react";
import "../../sass/auth/signUp.sass";
import Menu from "../../components/Auth/Menu";
import { getMnemonic, signUp } from "../../actions/Auth/index";
import { connect } from "react-redux";
import copyToClipboard from "../../utils/copyToClipboard";
class SignUp extends Component {
  render() {
    const { mnemonic, onGetMnemonic, onSignUp } = this.props;

    return (
      <div className="sign-up">
        <Menu type={false} />
        <div className="sign-up__text-area">
          <h3>Регистрация</h3>
          <div className="sign-up__input-div">
            <input
              className="sign-up__input"
              placeholder="Мнемоническая фраза"
              readOnly="readOnly"
              value={mnemonic}
            />
            <div
              onClick={copyToClipboard(mnemonic)}
              className="sign-up__copy-button"
            >
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
          <div onClick={() => onGetMnemonic()} className="sign-up__button">
            Получить мнемоническую фразу
          </div>
          <div
            onClick={() => onSignUp(this.props.mnemonic, this.props.history)}
            className="sign-up__button"
          >
            Зарегистрироваться
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mnemonic: state.User.mnemonic,
  inviteId: state.User.inviteId,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMnemonic: () => {
      dispatch(getMnemonic());
    },
    onSignUp: (mnemonic, history) => {
      dispatch(signUp(mnemonic, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
