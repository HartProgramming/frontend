import { useCardano } from "@cardano-foundation/cardano-connect-with-wallet";
import axios from "axios";
import snake from "../../pics/snakekowski.png";
import { useEffect, useState } from "react";
import classes from "./Connect.module.css";
import { sort } from "../Table/Test";
import { AccountBalanceWallet } from "@mui/icons-material";
import { Lucid } from "lucid-cardano";

import {
  stakeAddyInfo,
  getAddy,
  getAddyInfo,
  getAddyDetails,
  getTxInfo,
  getAssetInfo,
  getAssetSale,
} from "./WalletFuncs";
const WalletButton = () => {
  const {
    isEnabled,
    isConnected,
    enabledWallet,
    stakeAddress,
    signMessage,
    connect,
    disconnect,
  } = useCardano();

  useEffect(() => {
    async function connectWallet() {
      const lucid = await Lucid.new()
      const api = await window.cardano.nami.enable()
      console.log(lucid.selectWallet(api))
    }
    connectWallet()
  }, [])

  const [login, setLogin] = useState<boolean>(false);
  const [walletClicked, setWalletClicked] = useState<boolean>(false);
  const [userWallet, setUserWallet] = useState<string | null>("");

  const walletInfo = () => {
    setWalletClicked(true);
    setUserWallet(stakeAddress);
    axios
      .get("http://127.0.0.1:8000/api/user/?format=json")
      .then((res) => console.log(res));

    const postData = {
      stake_address: 'fasdfasdfv',
      assets: [{
        image: 'al;sl;adfh',
        policy_id: 'a;lsdjf',
        asset: 'aslkdhf',
        purchase_price: 1,
        current_price: 1
      }],
      assets_collection_info: 'hzxcv'
    };

    axios
      .post("http://127.0.0.1:8000/api/user/", postData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => console.log(res))
      .catch((err) => console.error("Error"));
    setLogin(false);
  };

  useEffect(() => {}, [userWallet]);

  const handleConnect = () => {
    console.log(connect("Nami", walletInfo).then(res => res));
  };

  return (
    <>
      {login ? (
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
