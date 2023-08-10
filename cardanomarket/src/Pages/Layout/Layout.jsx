import { Outlet, Link } from "react-router-dom";
import React from "react";
import classes from "./Layout.module.css";
import snake from "../../pics/snakekowski.png";

import WalletButton from "../../components/Table/Connect";
function Layout() {
 
  const handleConnect = () => {
    alert("success");
  };

  return (
    <>
      <nav className={classes.nav}>
        <ul className={classes.ul}>
          <div className={classes.logoContainer}>
            <img id={classes["logoIcon"]} src={snake} alt="" />

            <h3 className={classes.logoHeader}>4TheFam</h3>
          </div> 
          <div className={classes.buttonsContainer}>
            <li className={classes.linkContainer}>
                <Link className={classes.a} to="crypto">
                  Tokens
                </Link>
            </li>
            <li className={classes.linkContainer}>
                <Link className={classes.a} to="nft">
                  CNFTs
                </Link>
            </li>
            <li className={classes.linkContainer}>
                <Link className={classes.a} to="nft">
                  Portfolio
                </Link>
            </li>
            <li>
              <WalletButton></WalletButton>
            </li>
          </div>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
