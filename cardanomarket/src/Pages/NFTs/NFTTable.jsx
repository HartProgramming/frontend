import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import classes from "../Tokens/CryptoTable.module.css"
import Table from "../../components/Table/Table";
import BaseModal from "../../components/Modal/BaseModal";
const NFTTable = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();
  const [modal, setModal] = useState<boolean>(false)
  const [modalType, setModalType] = useState<'Buy' | 'Notification'>('Buy')

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/nfts/')
    .then((res) => setData(res.data))
  }, [data])

  return (
    <>
    {modal && <BaseModal visible={} modalType={modalType} />}
      <div className={classes.container}>
        <div className={classes.headerdiv}>
          <h1>Cardano NFT Daily Volume Rankings</h1>
          <h3>Courtesy of Opencnft.io</h3>
        </div>
       <Table searchResult={} searchCheck={} modalType={setModalType} modalVisible={setModal} tokenArray={'none'} nftArray={data} />
      </div>
    </>
  );
};

export default NFTTable;
