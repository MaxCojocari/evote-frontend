import BallotHeader from "../BallotHeader";
import ChoicesContainer from "../ChoicesContainer";
import ElectionContainer from "../ElectionContainer";
import Wizard from "../Wizard";
import classes from "./styles.module.css";

export default function Ballot({
  ballotName,
  votingState,
  electionsOrCandidates,
  choicePage,
}: any) {
  return (
    <div className={classes.main}>
      <BallotHeader text={ballotName} />
      <Wizard votingState={votingState} />
      {choicePage && <ChoicesContainer choices={electionsOrCandidates} />}
      {!choicePage && <ElectionContainer elections={electionsOrCandidates} />}
    </div>
  );
}
