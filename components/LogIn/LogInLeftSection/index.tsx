import { APP_URL } from "../../../config/config";
import Footer from "../../Footer";
import Header from "../../Header/Header";
import LogInForm from "../../LogIn/LogInForm";
import classes from "./styles.module.css";

export default function LogInLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header header={classes.header} />
      <LogInForm
        supportText={"Logare"}
        buttonName={"Logare"}
        baseText={"Nu ai token?"}
        hrefText={"Înregistrează-te"}
        redirectUrl={`/signup`}
        loginRedirectRelativeUrl={`/login/confirm`}
      />
      <Footer />
    </div>
  );
}
