import WalletButton from "../../components/Table/Connect";
import classes from "./Home.module.css";
const Home: React.FC = () => {
  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.header}>4TheFam</h1>

        <WalletButton />
      </div>
    </>
  );
}

export default Home;