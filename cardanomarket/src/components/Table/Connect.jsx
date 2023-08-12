import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";
import axios from "axios";
import snake from "../../pics/snakekowski.png";
import { useEffect } from "react";
import classes from "./Connect.module.css";
import { sort } from "./Test";
import { AccountBalanceWallet } from "@mui/icons-material";
import {
  stakeAddyInfo,
  getAddy,
  getAddyInfo,
  getAddyDetails,
  getTxInfo,
  getAssetInfo,
  getAssetSale,
} from "./WalletFuncs";
const WalletButton = (props) => {
  const {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
  } = useCardano();
  const marketAddyArr = [
    "addr1zxgx3far7qygq0k6epa0zcvcvrevmn0ypsnfsue94nsn3tvpw288a4x0xf8pxgcntelxmyclq83s0ykeehchz2wtspks905plm",
  ];
  let send;
  const claypez = {
    claypez: "bd30c07bed903332937dcf328e2bd6da5aec1e686c13e8c5f2c99e48",
    claypemations: "efca5b92cd89148f7920f4cab089fce8af4d19b0ec53ff5b7c1ae445",
    gophers: "075bc45055274a362eb5d0d86090f39ca269b5bd22abbce99d3e4a81",
  };

  const onConnect = () => {
    let hash;
    const addy = getAddy(stakeAddress);
    addy.then((add) => {
      getAddyInfo(add).then((policy) => {
        console.log(policy);
        for (let i of policy) {
          if (i.has_nft_onchain_metadata === true) {
            setTimeout(() => {
              getAssetSale(i.unit);
            }, 350);
            continue;
          }
        }
      });
      getAddyInfo(add).then((policy) => {
        console.log(policy);
        for (let nft of policy) {
          if (
            nft.unit.includes(
              claypez.gophers || claypez.claypemations || claypez.claypez
            )
          ) {
            console.log("true");
            break;
          } else {
            console.log("false");
          }
        }
      });
    });
  };

  const handleConnect = () => {
    return console.log(connect("Nami", onConnect));
  };

  return (
    <>
      {isConnected ? (
        <button className={classes.button} onClick={handleConnect}>
          <AccountBalanceWallet />
        </button>
      ) : (
        <button className={classes.button} onClick={handleConnect}>
          <AccountBalanceWallet />
        </button>
      )}
    </>
  );
};

export default WalletButton;
