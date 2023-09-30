import Footer from "../Footer";
import Header from "../Header/Header";
import SignUpForm from "../SignUpForm";
import classes from "./styles.module.css";

export default function SignUpLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header header={classes.header}/>
      <SignUpForm
        supportText={"Înregistrare"}
        buttonName={"Primește token-ul personal"}
        baseText={"Deja ai token-ul personal?"}
        hrefText={"Logează-te"}
        redirectUrl={"https://utm.md/en/"}
      />
      <Footer />
    </div>
  );
}
