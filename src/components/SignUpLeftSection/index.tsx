import Footer from "../Footer";
import Header from "../Header/Header";
import SignUpForm from "../SignUpForm";
import classes from "./styles.module.css";

export default function SignUpLeftSection() {
  return (
    <div className={classes.leftSection}>
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}
