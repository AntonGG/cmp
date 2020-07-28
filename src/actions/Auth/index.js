import {
  getMnemonic as getMnemonicFetch,
  signUp as signUpFetch,
  signIn as signInFetch,
} from "../../services/auth";
import { setCurrentWallet } from "../User";

export const setInput = (payload) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload });
};

export const signIn = (mnemonic, inviteId, history) => async (dispatch) => {
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
  dispatch({ type: "START_LOADING" });
  const mnemonic = await getMnemonicFetch();
  dispatch({ type: "SET_INPUT", payload: mnemonic });
  dispatch({ type: "FINISH_LOADING" });
};

export const signUp = (mnemonic, history) => async (dispatch) => {
  dispatch({ type: "START_LOADING" });

  try {
    const isAuth = await signUpFetch(mnemonic);
    dispatch({ type: "FINISH_LOADING" });
    console.log("isAuth " + isAuth);
    if (isAuth) {
      dispatch({ type: "SIGN_UP_SUCCESS" });
      dispatch({ type: "SET_INPUT", payload: { ...isAuth } });
      history.push("/lk/balance");
    } else {
      dispatch({ type: "SIGN_UP_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
};
