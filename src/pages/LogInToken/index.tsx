import AuthRightSection from "../../components/AuthRightSection";
import classes from "./styles.module.css";
import logInImg from "../../assets/login-img.jpeg";
import SignUpTokenLeftSection from "../../components/LogIn/LogInTokenLeftSection";

export default function LogInToken() {
  return (
    <div className={classes.signupReceiveToken}>
      <SignUpTokenLeftSection />
      <AuthRightSection img={logInImg} />
    </div>
  );
}
