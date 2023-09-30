import classes from "./styles.module.css";
import Header from "../Header/Header";
import ReceiveTokenForm from "../ReceiveTokenForm";
import Footer from "../Footer";
import { APP_URL } from "../../config/config";

export default function SignUpTokenLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header header={classes.header} />
      <ReceiveTokenForm
        supportText={"Înregistrare"}
        buttonName={"Primește token-ul personal"}
        baseText={"Deja ai token-ul personal?"}
        hrefText={"Logează-te"}
        redirectUrl={`${APP_URL}/login`}
      />
      <Footer />
    </div>
  );
}
