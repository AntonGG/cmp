import {
  getWallets,
  convertCrypto as convertCryptoFetch,
  withdrawCmp as withdrawCmpFetch,
} from "../../services/user";

export const setPreloader = (isPreloader) => async (dispatch) => {
  console.log("setPreloader");
  dispatch({ type: "SET_INPUT", payload: { isPreloader } });
};

export const popupClose = () => async (dispatch) => {
  console.log("popupClose");
  dispatch({ type: "SET_INPUT", payload: { isError: false, isPopup: false } });
};

export const getWalletsAndPartners = () => async (dispatch) => {
  console.log("getWalletsAndPartners");
  const json = await getWallets();
  console.log(json);
  dispatch({ type: "SET_INPUT", payload: { isPreloader: false, ...json } });
};

export const convertCrypto = (coin_code) => async (dispatch) => {
  console.log("convertCrypto");
  const json = await convertCryptoFetch(coin_code);
  if (json) {
    if (json.error) {
      dispatch({
        type: "SET_INPUT",
        payload: {
          popupMessage: json.error,
          isError: true,
          isPopup: true,
        },
      });
    } else {
      dispatch({
        type: "SET_INPUT",
        payload: { popupMessage: "Ok", isError: false, isPopup: true, ...json },
      });
    }
  } else {
    dispatch({
      type: "SET_INPUT",
      payload: { popupMessage: json, isError: true, isPopup: true },
    });
  }
};

export const setCurrentWallet = (currentWallet) => async (dispatch) => {
  dispatch({ type: "SET_INPUT", payload: { currentWallet } });
};

export const withdrawCmp = (address, amount) => async (dispatch) => {
  const json = await withdrawCmpFetch(address, amount);
  console.log("withdrawCmp", json);
  if (json) {
    if (json.error) {
      dispatch({
        type: "SET_INPUT",
        payload: {
          popupMessage: json.error,
          isError: true,
          isPopup: true,
        },
      });
    } else {
      dispatch({
        type: "SET_INPUT",
        payload: { popupMessage: "Ok", isError: false, isPopup: true, ...json },
      });
    }
  } else {
    dispatch({
      type: "SET_INPUT",
      payload: { popupMessage: json, isError: true, isPopup: true },
    });
  }
  // dispatch({ type: "SET_INPUT", payload: json });
};
