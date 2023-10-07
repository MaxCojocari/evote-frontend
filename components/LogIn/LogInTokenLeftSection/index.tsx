import classes from "./styles.module.css";
import Header from "../../Header/Header";
import ReceiveTokenForm from "../../ReceiveTokenForm";
import Footer from "../../Footer";

export default function LogInTokenLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header header={classes.header} />
      <ReceiveTokenForm
        supportText={"Logare"}
        buttonName={"Finalizează logarea"}
        baseText={"Nu ai access la nr. de telefon?"}
        hrefText={"Schimbă token-ul"}
        redirectUrl={`/signup`}
        buttonRedirectRelativeUrl={"/"}
        isReceiveToken={false}
      />
      <Footer />
    </div>
  );
}
