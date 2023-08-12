import React from "react";
import logo from "./logo.svg";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { BrowserRouterProps } from "react-router-dom";
import classes from "./app.module.css";
import CryptoTable from "./Pages/Tokens/CryptoTable";
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Layout />
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/crypto" Component={CryptoTable} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
