import { useEffect, useState } from "react";
import classes from "./Table.module.css";
import React from "react";

interface TableProps {
  tokenArray: any | "none";
  nftArray: NFTProps[] | "none";
}

export interface TokenProps {
  adaCurrentPrice: string;
  adaDailyVolume: string;
  adaMonthlyPercent: string;
  adaSevenDayPercent: string;
  adaTodayPercent: string;
  description: string;
  fingerprint: string;
  image: string;
  key: string;
  name: string;
  policyId: string;
  ticker: string;
  usdCurrentPrice: string;
  usdDailyVolume: string;
}

interface NFTProps {
  floor: string;
  volume: string;
  owners: string;
  supply: string;
  key: string;
}

const Table = ({ tokenArray, nftArray}: TableProps) => {
  const [data, setData] = useState();
  const [row, setRow] = useState([]);
  const [arr, setArr] = useState();
  const [header, setHeader] = useState<string[]>([]);
  const tokenHeadersArray: string[] = [
    "",
    "Ticker",
    "Price(ADA)",
    "Vol(24H)",
    "24H",
    "7D",
    "30D",
  ];
  const nftHeadersArray: string[] = [
    "Volume",
    "Floor (ADA)",
    "Supply",
    "Owners",
  ];

  useEffect(() => {
    if (nftArray === "none") {
      setHeader(tokenHeadersArray);
    } else {
      setHeader(nftHeadersArray);
    }
  }, []);

  return (
    <>
      <div className={classes.tableContainer}>
        <table className={classes.table}>
          <thead className={classes.tableHead}>
            <tr className={classes.tableHeaderRow}>
              {header.map((value) => (
                <th className={classes.tableHeader}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody className={classes.tableBody}>
            {tokenArray !== "none" &&
              tokenArray.map((value: any) => {
                return (
                  <tr className={classes.tableRow} key={value.key}>
                    <td className={classes.tableDetail}>
                      <img
                        className={classes.tokenImage}
                        src={value.image}
                        alt=""
                      />
                    </td>
                    <td className={classes.tableDetail}>{value.ticker}</td>
                    <td className={classes.tableDetail}>
                      {value.ada_current_price}
                    </td>
                    <td className={classes.tableDetail}>
                      {value.ada_daily_volume}
                    </td>
                    <td className={classes.tableDetail}>
                      {value.ada_today_percent}
                    </td>
                    <td className={classes.tableDetail}>
                      {value.ada_sevenDay_percent}
                    </td>
                    <td className={classes.tableDetail}>
                      {value.ada_monthly_percent}
                    </td>
                  </tr>
                );
              })}
            {nftArray !== "none" &&
              nftArray.map((value) => {
                return (
                  <tr className={classes.tableRow} key={value.key}>
                    <td className={classes.tableDetail}>{value.floor}</td>
                    <td className={classes.tableDetail}>{value.owners}</td>
                    <td className={classes.tableDetail}>{value.supply}</td>
                    <td className={classes.tableDetail}>{value.volume}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
