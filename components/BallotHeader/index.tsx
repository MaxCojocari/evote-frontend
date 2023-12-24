import classes from "./styles.module.css";

export default function BallotHeader({ text }: any) {
  return (
    <div className={classes.header}>
      <div className={classes.headerContainer}>
        <div className={classes.headerText}>{text}</div>
      </div>
    </div>
  );
}
