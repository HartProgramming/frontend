import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import classes from "./SearchBar.module.css";

export interface SearchBarProps {
  type: "Tokens" | "NFTs";
  searchResult: Dispatch<SetStateAction<[]>>;
  searchBoo: Dispatch<SetStateAction<boolean>>;
  results: any;
}

export default function SearchBar({
  results,
  type,
  searchResult,
  searchBoo,
}: SearchBarProps) {
  const [search, setSearch] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>("");
  const [searchArray, setSearchArray] = useState<[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(false);
    searchBoo(false);
    setTimeout(() => {
      setSearch(true);
      searchBoo(true);
      setSearchString(event.target.value);
    }, 400);
  };

  useEffect(() => {
    console.log(search);
    console.log(searchString);
    axios
      .get("http://127.0.0.1:8000/api/tokens/")
      .then((res) =>
        searchResult(
          res.data.filter(
            (value: any) =>
              value.ticker.includes(searchString.toLowerCase()) ||
              value.ticker.includes(searchString.toUpperCase())
          )
        )
      );
  }, [search]);

  useEffect(() => {
    console.log(searchArray);
  }, [searchArray, searchString]);

  return (
    <div className={classes.container}>
      <div>
        <h4 className={classes.searchHeader}>{type} Search</h4>
        {results.length > 0 && (
          <span className={classes.searchResults}>
            {results.length} Results
          </span>
        )}
      </div>

      <div>
        <input
          className={classes.input}
          onChange={handleSearch}
          placeholder={`Search ${type}`}
          type="text"
        />
      </div>
    </div>
  );
}
