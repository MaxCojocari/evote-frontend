import AuthRightSection from "../../../components/AuthRightSection";
import classes from "./styles.module.css";
import SignUpTokenLeftSection from "../../../components/SignUp/SignUpTokenLeftSection";
import signUpImg from "../../../public/signup-img.png";

export default function SignUpToken() {
  return (
    <div className={classes.signupReceiveToken}>
      <SignUpTokenLeftSection />
      <AuthRightSection img={signUpImg} />
    </div>
  );
}
