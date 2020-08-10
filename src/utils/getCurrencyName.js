const getCurrencyFullName = (currencyName) => {
  console.log("currencyName", currencyName);
  switch (currencyName) {
    case "BTC":
      return "Bitcoin";
    case "ETH":
      return "Ethereum";
    case "ERC20":
      return "USDT";
    case "USDT":
      return "USDT (ERC20)";
    case "BNB":
      return "Binance coin";
    default:
      return "";
  }
};
export default getCurrencyFullName;
