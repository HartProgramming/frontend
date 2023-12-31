import Table from "../../components/Table/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import classes from "./CryptoTable.module.css";
const NFTPortfolio = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();


  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerdiv}>
          <h1>Cardano NFT Daily Volume Rankings</h1>
          <h3>Courtesy of Opencnft.io</h3>
        </div>
        {<Table nft={data}></Table>}
      </div>
    </>
  );
};

export default NFTPortfolio;