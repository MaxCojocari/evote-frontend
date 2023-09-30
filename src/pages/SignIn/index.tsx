import classes from "./styles.module.css";
import signInImg from "../../assets/signin-img.jpeg";
import AuthRightSection from "../../components/AuthRightSection";
import SignInLeftSection from "../../components/SignInLeftSection";

export default function SignIn() {
  return (
    <div className={classes.signin}>
      <SignInLeftSection />
      <AuthRightSection img={signInImg} />
    </div>
  );
}
