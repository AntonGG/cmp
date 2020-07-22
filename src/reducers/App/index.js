const initialState = {
  isLoading: false,
  isError: false,
  errorMsg: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "START_LOADING":
      return { ...state, isLoading: true };
    case "FINISH_LOADING":
      return { ...state, isLoading: false };
    case "ERROR":
      return { ...state, isError: true, errorMsg: payload };
    default:
      return state;
  }
};
