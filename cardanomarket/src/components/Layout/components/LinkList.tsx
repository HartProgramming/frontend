import classes from "./LinkList.module.css";
import { Link } from "react-router-dom";

export interface LinkListProps {
  array: any;
}

export interface LinkListArrayProps {
  name: string;
  path: string;
}

export default function LinkList({ array }: LinkListProps) {
  return (
    <div className={classes.buttonsContainer}>
      {array.map((value: LinkListArrayProps) => (
        <li className={classes.linkContainer}>
          <Link className={classes.a} to={value.path}>
            {value.name}
          </Link>
        </li>
      ))}
    </div>
  );
}
