import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "../../scss/index.css";
import classes from "./CryptoTable.module.css";
import Table from "../../components/Table/Table";
import { TokenProps } from "../../components/Table/Table";
import BaseModal from "../../components/Modal/BaseModal";
import { ModalLabelProps } from "../../components/Modal/BaseModal";
import { TableProps } from "../../components/Table/Table";
import { ModalInfoProps } from "../../components/Modal/BaseModal";
import SearchBar from "../../components/Input/SearchBar";
const CryptoTable: React.FC = () => {
  const [data, setData] = useState([]);
  const [table, setTable] = useState();
  const [arrayCounter, setArrayCounter] = useState<number>(0);
  const [dataObject, setDataObject] = useState<TokenProps[]>([]);
  const [modalType, setModalType] =
    useState<ModalLabelProps["modal"]>("Notification");
  const [visibility, setVisibility] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<[]>([]);
  const [search, setSearch] = useState<boolean>(false);

  useEffect(() => {
    console.log("hi");
    axios
      .get("http://127.0.0.1:8000/api/tokens/")
      .then((res) => setDataObject(res.data));
    console.log(dataObject);
  }, []);

  useEffect(() => {
    console.log(dataObject);
  }, [dataObject]);

  return (
    <>
      {visibility && (
        <BaseModal visible={setVisibility} modalType={modalType} />
      )}
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <h1 className={classes.header}>Cardano Native Token Prices</h1>
          <h3 className={classes.subHeader}>Courtesy of Muesliswap</h3>
        </div>
        <div className={classes.searchBar}>
          <SearchBar results={searchResult} searchBoo={setSearch} searchResult={setSearchResult} type="Tokens" />
        </div>
        <div className={classes.tableContainer}>
          <Table
            modalType={setModalType}
            modalVisible={setVisibility}
            nftArray={"none"}
            tokenArray={dataObject}
            searchResult={searchResult}
            searchCheck={search}
          />
        </div>
      </div>
    </>
  );
};

export default CryptoTable;
