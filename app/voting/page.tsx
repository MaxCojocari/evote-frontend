import Ballot from "../../components/Ballot";
import Sidebar from "../../components/Sidebar";
import classes from "./styles.module.css";

export default function VotingPage() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Ballot />
    </div>
  );
}
