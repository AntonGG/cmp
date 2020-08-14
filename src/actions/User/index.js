import {
  getWallets as getWalletsFetch,
  getIcoInfo as getIcoInfoFetch,
  convertCrypto as convertCryptoFetch,
  withdrawCmp as withdrawCmpFetch,
} from "../../services/user";

export const setMnemonic = (mnemonic) => async (dispatch) => {
  console.log("setPreloader");
  dispatch({ type: "SET_MNEMONIC", payload: mnemonic });
};
export const setPreloader = (isPreloader) => async (dispatch) => {
  console.log("setPreloader");
  dispatch({ type: "SET_INPUT", payload: { isPreloader } });
};

export const popupClose = () => async (dispatch) => {
  console.log("popupClose");
  dispatch({ type: "SET_INPUT", payload: { isError: false, isPopup: false } });
};

export const getWallets = () => async (dispatch) => {
  console.log("getWallets");
  const json = await getWalletsFetch();
  console.log(json);
  dispatch({ type: "SET_INPUT", payload: { isPreloader: false, ...json } });
};

export const getIcoInfo = () => async (dispatch) => {
  console.log("getIcoInfo");
  const json = await getIcoInfoFetch();
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
        payload: {
          popupMessage: json.message,
          isError: false,
          isPopup: true,
          ...json,
        },
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
