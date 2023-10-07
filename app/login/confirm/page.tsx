import AuthRightSection from "../../../components/AuthRightSection";
import classes from "./styles.module.css";
import logInImg from "../../../public/login-img.jpeg";
import LogInTokenLeftSection from "../../../components/LogIn/LogInTokenLeftSection";

export default function LogInToken() {
  return (
    <div className={classes.loginReceiveToken}>
      <LogInTokenLeftSection />
      <AuthRightSection img={logInImg} />
    </div>
  );
}
