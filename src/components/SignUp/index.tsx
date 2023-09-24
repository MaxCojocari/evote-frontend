import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import classes from "./styles.module.css";

export default function SignUp() {
  return (
    <div className={classes.signup}>
      <LeftSection />
      <RightSection />
    </div>
  );
}
