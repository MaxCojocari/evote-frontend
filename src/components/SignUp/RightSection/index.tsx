import signUpImg from "../../../assets/signup-img.png";
import classes from "./styles.module.css";

export default function RightSection() {
  return (
    <div className={classes.rightSection}>
      <img className={classes.img} src={signUpImg} alt="signup-img" />
    </div>
  );
}
