import classes from "./styles.module.css";
import logInImg from "../../assets/login-img.jpeg";
import AuthRightSection from "../../components/AuthRightSection";
import LogInLeftSection from "../../components/LogIn/LogInLeftSection";

export default function LogIn() {
  return (
    <div className={classes.login}>
      <LogInLeftSection />
      <AuthRightSection img={logInImg} />
    </div>
  );
}
