import classes from "./styles.module.css";

export default function AuthRightSection({ img }: any) {
  return (
    <div className={classes.rightSection}>
      <img className={classes.img} src={img} alt="signup-img" />
    </div>
  );
}
