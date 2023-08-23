import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./Table.module.css";
import React from "react";
import Expand from "../Icons/Expand";
import { ModalLabelProps } from "../Modal/BaseModal";
import { ModalInfoProps } from "../Modal/BaseModal";
import { ModeStandbyTwoTone } from "@mui/icons-material";
import TableBody from "./TableBody";

export interface TableProps {
  tokenArray: any | "none";
  nftArray: NFTProps[] | "none";
  modalVisible: Dispatch<SetStateAction<boolean>>;
  modalType: Dispatch<SetStateAction<"Notification" | "Buy">>;
  searchCheck: boolean;
  searchResult: any;
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

const Table = ({
  tokenArray,
  nftArray,
  modalVisible,
  modalType,
  searchCheck,
  searchResult,
}: TableProps) => {
  const [data, setData] = useState();
  const [row, setRow] = useState([]);
  const [arr, setArr] = useState();
  const [header, setHeader] = useState<string[]>([]);
  const [visibility, setVisibility] = useState<boolean>(true);

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
          searchCheck === false &&
          searchResult.length === 0
            ? tokenArray.map((value: any) => {
                return (
                  <TableBody
                    modalType={modalType}
                    modalVisible={modalVisible}
                    arrayType="Token"
                    value={value}
                    header={header}
                  />
                );
              })
            : searchResult.map((value: any) => {
                return (
                  <TableBody
                    modalType={modalType}
                    modalVisible={modalVisible}
                    arrayType="Token"
                    value={value}
                    header={header}
                  />
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
