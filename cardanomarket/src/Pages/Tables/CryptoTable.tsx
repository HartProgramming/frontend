import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "../../scss/index.css";

const CryptoTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();

  useEffect(() => {
    console.log("hi");
    axios
      .get(" https://js.cexplorer.io/api-static/basic/global.json")
      .then((res) => console.log(res));
    axios
      .get("https://analyticsv2.muesliswap.com/ticker")
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <div className={"container"}>
        <div className={"container"}>
          <h1 className={"text-primary"}>Native ADA Token Prices</h1>
          <h3>Courtesy of Muesliswap</h3>
        </div>
      </div>
    </>
  );
}

export default CryptoTable;
