import React, { useState } from "react";
import "../../sass/personalArea/balanceTable.sass";
import copyToClipboard from "../../utils/copyToClipboard";
import refreshLogo from "../../images/PersonalArea/Refresh.png";
import getCurrencyFullName from "../../utils/getCurrencyName";
import CashInPopup from "./CashInPopup";
import CashOutPopup from "./CashOutPopup";

const getCurrency = (currency_prices, currencyName, convertCrypto) => {
  console.log("curremc", currency_prices);
  if (currency_prices) {
    const currency = currency_prices.find(
      (price) => price.currency === currencyName
    );
    if (currency) {
      return currency.price;
    }
  }
  return "0";
};

const getCmp = (wallets) => wallets.find((wallet) => wallet.currency === "CMP");

const BalanceTable = ({
  wallets,
  currentWallet,
  setCurrentWallet,
  onGetWallets,
  currency_prices,
  convertCrypto,
}) => {
  console.log("currency_prices", currency_prices);
  const cmp = getCmp(wallets);
  const [isCashInPopup, setIsCashInPopup] = useState(false);
  const [currentWalletPopup, setCurrentWalletPopup] = useState({});
  const onSetIsCashInPopup = () => setIsCashInPopup(false);

  const [isCashOutPopup, setIsCashOutPopup] = useState(false);
  const onSetIsCashOutPopup = () => setIsCashOutPopup(false);

  return (
    <div className="balance-table">
      <CashInPopup
        wallet={currentWalletPopup}
        isPopup={isCashInPopup}
        setIsPopupFalse={onSetIsCashInPopup}
      />
      <CashOutPopup
        wallet={currentWalletPopup}
        isPopup={isCashOutPopup}
        setIsPopupFalse={onSetIsCashOutPopup}
      />
      <div className="balance-table__title">
        <div className="balance-table__bottom-block">
          <div className="balance-table__div__black">
            <div className="balance__refresh-logo-div">
              <img
                className="balance__refresh-logo"
                onClick={() => onGetWallets()}
                src={refreshLogo}
                alt="Logo"
              />
              <p className="balance__count">{cmp ? cmp.balance : "0"}</p>
            </div>
            <p className="balance__dash__orange">&mdash;</p>
            <p className="balance__naming">Ваш баланс</p>
          </div>
          <div className="balance-table__cmp-buttons">
            <div
              onClick={() => {
                setIsCashOutPopup(true);
                setIsCashInPopup(false);
                setCurrentWalletPopup(cmp);
              }}
              className="balance-table__cash-button__green"
            >
              <p>Вывести</p>
            </div>
            <div
              onClick={() => {
                setIsCashInPopup(true);
                setIsCashOutPopup(false);
                setCurrentWalletPopup(cmp);
              }}
              className="balance-table__cash-button__blue"
            >
              <p>Пополнить</p>
            </div>
          </div>
        </div>
      </div>
      <div className="balance-table__body">
        {wallets &&
          wallets.map((wallet, i) => {
            return (
              wallet.currency !== "CMP" && (
                <div key={i} className="balance-table__item">
                  <div className="balance-table__item-row balance-table__item__active">
                    <div className="balance-table__item-row-first">
                      <p>
                        <span className="font__bold">
                          {getCurrencyFullName(wallet.currency)}{" "}
                          {wallet.currency}
                        </span>{" "}
                        {wallet.balance}
                        <span className="font__bold"> &asymp; </span>
                        {cmp ? cmp.balance : "0"}{" "}
                        <span className="font__bold">CMP</span>
                      </p>
                    </div>
                    <div className="balance-table__item-row-last">
                      <div
                        onClick={() =>
                          convertCrypto(wallet ? wallet.currency : "")
                        }
                        className="balance-table-buy-button"
                      >
                        <p>Купить</p>
                      </div>
                    </div>
                  </div>
                  <div className="balance-table__title-row">
                    <div className="balance-table-cash-in__input">
                      <input
                        placeholder="Ваш адрес"
                        value={wallet.address ? wallet.address : ""}
                      />
                      <div
                        onClick={() =>
                          copyToClipboard(wallet.address ? wallet.address : "")
                        }
                        className="balance-table-cash-in__copy-button"
                      >
                        <p>Копировать</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default BalanceTable;
