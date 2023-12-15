import BallotHeader from "../BallotHeader";
import ChoicesContainer from "../ChoicesContainer";
import ElectionContainer from "../ElectionContainer";
import Wizard from "../Wizard";
import classes from "./styles.module.css";

export default function Ballot({
  ballotName,
  votingState,
  choices,
  choicePage,
}: any) {
  return (
    <div className={classes.main}>
      <BallotHeader text={ballotName} />
      <Wizard votingState={votingState} />
      {choicePage && <ChoicesContainer choices={choices} />}
      {!choicePage && <ElectionContainer elections={choices} />}
    </div>
  );
}
