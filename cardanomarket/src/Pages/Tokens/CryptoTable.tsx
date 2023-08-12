import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "../../scss/index.css";
import classes from "./CryptoTable.module.css";
import Table from "../../components/Table/Table";
import { TokenProps } from "../../components/Table/Table";

const CryptoTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();
  const [arrayCounter, setArrayCounter] = useState<number>(0);
  const [dataObject, setDataObject] = useState<TokenProps[]>([])

  useEffect(() => {
    console.log("hi");
    axios.get('http://127.0.0.1:8000/api/tokens/')
    .then((res) => 
      setDataObject(res.data)
    )
    console.log(dataObject)
  }, []);

  useEffect(() => {
    console.log(dataObject)
  }, [dataObject])

  return (
    <div className={classes.container}>
      <div className={classes.headerContainer}>
        <h1 className={classes.header}>Native ADA Token Prices</h1>
        <h3 className={classes.subHeader}>Courtesy of Muesliswap</h3>
      </div>
      <div className={classes.tableContainer}>
        <Table nftArray={'none'} tokenArray={dataObject} />
      </div>
    </div>
  );
};

export default CryptoTable;
