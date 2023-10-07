import classes from "./styles.module.css";
import AuthRightSection from "../../components/AuthRightSection";
import LogInLeftSection from "../../components/LogIn/LogInLeftSection";
import logInImg from "../../public/login-img.jpeg";

export default function LogIn() {
  return (
    <div className={classes.login}>
      <LogInLeftSection />
      <AuthRightSection img={logInImg} />
    </div>
  );
}
