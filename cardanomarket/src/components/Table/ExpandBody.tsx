import React, { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import classes from "./Table.module.css";

interface ExpandBodyProps {
  value: any;
  expand: boolean;
  fingerprint: string;
  identity: any;
  modalVisible: any;
  modalType: Dispatch<SetStateAction<"Notification" | "Buy">>;
  header: any;
}

export default function ExpandBody({
  header,
  value,
  expand,
  fingerprint,
  identity,
  modalType,
  modalVisible,
}: ExpandBodyProps) {
  const handleModal = (event: string) => {
    if (event === "Buy") {
      modalVisible(true);
      modalType("Buy");
    } else if (event === "Notification") {
      modalVisible(true);
      modalType("Notification");
    }
  };

  useEffect(() => {
    console.log(identity, fingerprint);
  }, [identity, fingerprint]);

  return (
    <>
      {expand && identity === fingerprint && (
        <>
          <tr className={classes.expansionRow}>
            <td colSpan={header.length + 1}>
              <table className={classes.expansionTable}>
                <thead className={classes.expansionHead}>
                  <tr className={classes.expansionRowHead}>
                    <th className={classes.expansionDescriptionHeader}>
                      Description
                    </th>

                    <th className={classes.expansionHeader}></th>
                    <th className={classes.expansionHeader}></th>
                  </tr>
                </thead>
                <tbody className={classes.expansionBody}>
                  <tr className={classes.expansionRow}>
                    <td className={classes.expansionDescriptionDetail}>
                      {value.description}
                    </td>
                    <td className={classes.expansionDescriptionDetail}>
                      {value.supply}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr className={classes.expansionRow}>
            <td colSpan={header.length + 1}>
              <table className={classes.expansionTable}>
                <thead className={classes.expansionHead}>
                  <tr className={classes.expansionRowHead}>
                    <th className={classes.expansionHeader}></th>
                    <th className={classes.expansionHeader}></th>
                  </tr>
                </thead>
                <tbody className={classes.expansionBody}>
                  <tr className={classes.expansionRow}>
                    <td className={classes.expansionDetail}>
                      <button
                        onClick={() => handleModal("Notification")}
                        className={classes.button}
                      >
                        Notify
                      </button>
                    </td>
                    <td className={classes.expansionDetail}>
                      <button
                        onClick={() => handleModal("Buy")}
                        className={classes.button}
                      >
                        Buy
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
