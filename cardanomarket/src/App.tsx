import React from "react";
import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { BrowserRouterProps } from "react-router-dom";
import classes from "./app.module.css";
import CryptoTable from "./Pages/Tokens/CryptoTable";
import NFTTable from "./Pages/NFTs/NFTTable";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Layout />
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/tokens" Component={CryptoTable} />
          <Route path='/nfts' Component={NFTTable} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
