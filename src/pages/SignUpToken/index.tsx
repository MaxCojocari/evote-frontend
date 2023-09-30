import AuthRightSection from "../../components/AuthRightSection";
import classes from "./styles.module.css";
import signUpImg from "../../assets/signup-img.png";
import SignUpTokenLeftSection from "../../components/SignUpTokenLeftSection";

export default function SignUpToken() {
  return (
    <div className={classes.signupReceiveToken}>
      <SignUpTokenLeftSection />
      <AuthRightSection img={signUpImg} />
    </div>
  );
}
