import React, { Component } from "react";
import "../../sass/auth/auth.sass";
import Menu from "../../components/Auth/Menu";
import { getMnemonic, signUp } from "../../actions/Auth/index";
import { connect } from "react-redux";
import copyToClipboard from "../../utils/copyToClipboard";
class SignUp extends Component {
  render() {
    const { mnemonic, onGetMnemonic, onSignUp } = this.props;

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
              onClick={copyToClipboard(mnemonic)}
              className="auth__copy-button"
            >
              <p>Копировать</p>
            </div>
          </div>
          <div onClick={() => onGetMnemonic()} className="auth__button">
            Получить мнемоническую фразу
          </div>
          <div
            onClick={() => onSignUp(this.props.mnemonic, this.props.history)}
            className="auth__button"
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
  isLoading: state.Auth.isLoading,
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
