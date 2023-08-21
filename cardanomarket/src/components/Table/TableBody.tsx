import Expand from "../Icons/Expand";
import ExpandBody from "./ExpandBody";
import classes from "./Table.module.css";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface TableBodyProps {
  value: any;
  arrayType: "Token" | "Nft";
  modalVisible: Dispatch<SetStateAction<boolean>>;
  modalType: Dispatch<SetStateAction<"Notification" | "Buy">>;
  header: string[]
}

export default function TableBody({header, value, arrayType, modalType, modalVisible }: TableBodyProps) {
  const [expand, setExpand] = useState<boolean>(false);
  const [keyValue, setKeyValue] = useState<string>("");

  useEffect(() => {
    console.log(keyValue)
    console.log(expand)
  }, [keyValue])

  return (
    <>
        {arrayType === "Token" ? (
          <>
            <tr>
              <td className={classes.tableDetail}>
                <img className={classes.tokenImage} src={value.image} alt="" />
              </td>
              <td className={classes.tableDetail}>{value.ticker}</td>
              <td className={classes.tableDetail}>{value.ada_current_price}</td>
              <td className={classes.tableDetail}>{value.ada_daily_volume}</td>
              <td className={classes.tableDetail}>{value.ada_today_percent}</td>
              <td className={classes.tableDetail}>
                {value.ada_sevenDay_percent}
              </td>
              <td className={classes.tableDetail}>
                {value.ada_monthly_percent}
              </td>
              <td className={classes.tableDetail}>
                <Expand
                  fingerprint={value.fingerprint}
                  expandBoolean={setExpand}
                  buttonStyle={classes.expandButton}
                  setKey={setKeyValue}
                />
              </td>
            </tr>
            <ExpandBody
              header={header}
              modalVisible={modalVisible}
              modalType={modalType}
              fingerprint={value.fingerprint}
              identity={keyValue}
              value={value}
              expand={expand}
            />
          </>
        ) : (
          <tr className={classes.tableRow} key={value.key}>
            <td className={classes.tableDetail}>{value.floor}</td>
            <td className={classes.tableDetail}>{value.owners}</td>
            <td className={classes.tableDetail}>{value.supply}</td>
            <td className={classes.tableDetail}>{value.volume}</td>
          </tr>
        )
      }
    </>
  );
}
