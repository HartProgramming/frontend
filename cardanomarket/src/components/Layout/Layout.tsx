import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "./Layout.module.css";
import snake from "../../pics/snakekowski.png";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import LinkList, {
  LinkListProps,
  LinkListArrayProps,
} from "./components/LinkList";
import WalletButton from "../Table/Connect";
import { link } from "fs";

export default function Layout() {
  const [expand, setExpand] = useState<boolean>(false);
  const [navArray, setNavArray] = useState<LinkListArrayProps[]>([]);

  const linkListArray: LinkListArrayProps[] = [
    { name: "Tokens", path: "tokens" },
    { name: "Nfts", path: "nfts" },
    { name: "Portfolio", path: "portfolio" },
  ];

  const handleNavExpansion = () => {
    if (expand === false) {
      setExpand(true);
      setNavArray(linkListArray);
      console.log(linkListArray);
    } else {
      setExpand(false);
    }
  };

  const handleConnect = () => {
    alert("success");
  };

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <div className={classes.topContainer}>
            <div className={classes.logoContainer}>
              <img id={classes["logoIcon"]} src={snake} alt="" />

              <h3 className={classes.logoHeader}>4TheFam</h3>
            </div>
            <div>
              <li>
                <WalletButton></WalletButton>
              </li>
            </div>
          </div>
          <div className={classes.expansionDiv}>
            <button
              className={classes.expansionButton}
              onClick={handleNavExpansion}
            >
              {expand === false ? (
                <ExpandMore className={classes.expansion} />
              ) : (
                <ExpandLess />
              )}
            </button>
          </div>
          {expand === true && <LinkList array={navArray} />}
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
