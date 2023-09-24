import Logo from "../../../Logo";
import classes from "./styles.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <Logo />
    </div>
  );
}
