import SignUpLeftSection from "../../components/SignUp/SignUpLeftSection";
import AuthRightSection from "../../components/AuthRightSection";
import classes from "./styles.module.css";
import signUpImg from "../../public/signup-img.png";

export default function SignUp() {
  return (
    <div className={classes.signup}>
      <SignUpLeftSection />
      <AuthRightSection img={signUpImg} />
    </div>
  );
}
