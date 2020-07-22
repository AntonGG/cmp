import * as Auth from "../../services/Auth/index";
export const signIn = (email, password) => async (dispatch) => {
  dispatch({ type: "START_LOADING" });

  try {
    if (Auth.signIn()) {
      dispatch({ type: "SIGN_IN_SUCCESS" });
    } else {
      dispatch({ type: "SIGN_IN_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
  dispatch("FINISH_LOADING");
};
export const signUp = (email, password) => async (dispatch) => {
  dispatch({ type: "START_LOADING" });

  try {
    if (Auth.signIn()) {
      dispatch({ type: "SIGN_UP_SUCCESS" });
    } else {
      dispatch({ type: "SIGN_UP_INVALID" });
    }
  } catch (e) {
    console.log(e);
  }
  dispatch("FINISH_LOADING");
};
