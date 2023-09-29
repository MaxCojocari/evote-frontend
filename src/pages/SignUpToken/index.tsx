import AuthRightSection from "../../components/AuthRightSection";
import ReceiveToken from "../../components/ReceiveToken/ReceiveToken";
import classes from "./styles.module.css";
import signUpImg from "../../assets/signup-img.png";

export default function SignUpToken() {
  return (
    <div className={classes.signupReceiveToken}>
      <ReceiveToken />
      <AuthRightSection img={signUpImg} />
    </div>
  );
}
