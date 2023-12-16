import { Choice } from "../../types/types";
import ElectionBox from "../ElectionBox";
import classes from "./styles.module.css";

export default function ElectionContainer({ elections }: any) {
  return (
    <div className={classes.main}>
      {elections?.map((election: Choice, index: any) => (
        <ElectionBox key={index} choice={election} />
      ))}
    </div>
  );
}
