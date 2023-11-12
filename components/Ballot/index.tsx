import BallotHeader from "../BallotHeader";
import ElectionContainer from "../ElectionContainer";
import Wizard from "../Wizard";
import classes from "./styles.module.css";

export default function Ballot() {
  return (
    <div className={classes.main}>
      <BallotHeader text={"Votare"} />
      <Wizard />
      <ElectionContainer />
    </div>
  );
}
