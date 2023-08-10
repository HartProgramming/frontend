import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./Table.module.css";
import React from "react";
const Table = ({ token, nft, cells }) => {
  const [data, setData] = useState();
  const [row, setRow] = useState([]);
  const [arr, setArr] = useState();
  const [header, setHeader] = useState([]);
  const tokenArray = ["Name", "Symbol", "Price($)", "Price(ADA)", "24H Volume"];
  const nftArray = ["Volume", 'Floor (ADA)', 'Supply', 'Owners'];

  const determineData = (headerArr, rowArr) => {
    const mapheader = () => {
      if (headerArr === tokenArray) {
        return headerArr.map((index) => {
          return <th>{index}</th>;
        });
      } else if (headerArr === nftArray) {
        return headerArr.map((index) => {
          return <th>{index}</th>;
        });
      }
    };
    const mappedrow = () => {
      if (rowArr === token) {
        return rowArr.map((x) => {
          return (
            <tr>
              <td className={classes.td}>{x.base_name}</td>
              <td className={classes.td}>{x.base_symbol}</td>
              <td className={classes.td}>
                {parseFloat(x.usd_price).toFixed(6)}
              </td>
              <td className={classes.td}>
                {parseFloat(x.last_price).toFixed(6)}
              </td>
              <td className={classes.td}>
                {parseFloat(x.quote_volume).toFixed(2)}
              </td>
            </tr>
          );
        });
      } else if (rowArr === nft) {
        return rowArr.map((x) => {
          return (
            <tr key={x.policy_id}>
              <td className={classes.td}>{x.volume}</td>
              <td className={classes.td}>{x.floor}</td>
              <td className={classes.td}>{x.supply}</td>
              <td className={classes.td}>{x.owners}</td>
            </tr>
          );
        });
      }
    };

    setHeader(mapheader);
    setRow(mappedrow);
  };

  useEffect(() => {
    setTimeout(() => {
      determineData(nftArray, nft)
    }, 1000);
  }, [token, nft]);

  return (
    <>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead className={classes}>
            <tr className={classes.headerrow}>{header}</tr>
          </thead>
          <tbody className={classes}>{row}</tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
