import Table from "../../components/Table/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import classes from "../Tokens/CryptoTable.module.css"
const NFTTable = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();

  useEffect(() => {

  }, [])

  return (
    <>
      <div className={classes.container}>
        <div className={classes.headerdiv}>
          <h1>Cardano NFT Daily Volume Rankings</h1>
          <h3>Courtesy of Opencnft.io</h3>
        </div>
       
      </div>
    </>
  );
};

export default NFTTable;
