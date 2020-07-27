const initialState = {
  mnemonic: "",
  inviteId: "0",
  partnerUrl: "",
  inviters: 0,
  invitedBy: 0,
  wallets: [{ currency: "BTC", address: "", balance: "0" }],
  currentWallet: 0, //index
  lastCompletedTasks: [
    {
      name: "Webtoken Profit",
      type: "application",
      time: "+17",
      status: "waiting",
    },
    {
      name: "Webtoken Profit",
      type: "application",
      time: "+17",
      status: "waiting",
    },
  ],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_INPUT":
      return { ...state, ...payload };
    case "SIGN_IN_SUCCESS":
      return { ...state, authStatus: true };
    case "SIGN_IN_INVALID":
      return { ...state, authStatus: false };
    default:
      return state;
  }
};
