import classes from "./styles.module.css";
import Header from "../Header/Header";
import ReceiveTokenForm from "../ReceiveTokenForm";
import Footer from "../Footer";

export default function SignUpTokenLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header />
      <ReceiveTokenForm
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
