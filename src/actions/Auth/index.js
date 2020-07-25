import history from "../../history";
import {
  getMnemonic as getMnemonicFetch,
  signIn as signInFetch,
} from "../../services/Auth/index";

export const signIn = (mnemonic, inviteId) => async (dispatch) => {
  dispatch({ type: "START_LOADING" });

  try {
    const isAuth = await signInFetch(mnemonic, inviteId);
    console.log("isAuth " + isAuth);
    if (isAuth) {
      dispatch({ type: "SIGN_UP_SUCCESS" });
      history.push("/lk/balance");
    } else {
      dispatch({ type: "SIGN_UP_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
  dispatch({ type: "FINISH_LOADING" });
};

export const getMnemonic = () => async (dispatch) => {
  const mnemonic = await getMnemonicFetch();
  dispatch({ type: "SET_INPUT", payload: mnemonic });
};

export const setInput = (payload) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload });
};
