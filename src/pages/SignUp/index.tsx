import SignUpLeftSection from "../../components/SignUpLeftSection";
import AuthRightSection from "../../components/AuthRightSection";
import classes from "./styles.module.css";
import signUpImg from "../../assets/signup-img.png";

export default function SignUp() {
  return (
    <div className={classes.signup}>
      <SignUpLeftSection />
      <AuthRightSection img={signUpImg} />
    </div>
  );
}
