import { ExpandMore, ExpandLess } from "@mui/icons-material";
import exp from "constants";
import { HtmlHTMLAttributes, SetStateAction, useState, Dispatch, useEffect } from "react";

interface ExpandProps {
  expandBoolean: Dispatch<SetStateAction<boolean>>;
  buttonStyle: string;
  setKey: Dispatch<SetStateAction<string>>
  fingerprint: string;
}

export default function Expand({fingerprint, setKey, expandBoolean, buttonStyle }: ExpandProps) {
  const [expand, setExpand] = useState<boolean>(false);

  const handleExpand = () => {
    setExpand(!expand);
    expandBoolean(!expand);
    setKey(fingerprint)
    console.log(fingerprint)
  }; 

  useEffect(() => {
    console.log(setKey, expand, expandBoolean)
  }, [setKey, expandBoolean, expand])
 
  return (
    <>
      {expand === false ? (
        <button className={buttonStyle} onClick={handleExpand}>
          <ExpandMore />
        </button>
      ) : (
        <button className={buttonStyle} onClick={handleExpand}>
          <ExpandLess />
        </button>
      )}
    </>
  );
}
