import Ballot from "../../../components/Ballot";
import Sidebar from "../../../components/Sidebar";
import { VotingStep } from "../../../types/types";
import classes from "../styles.module.css";

export default function VotingDone() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <Ballot votingState={VotingStep.VOTED} />
    </div>
  );
}
