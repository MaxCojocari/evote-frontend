import classes from "./styles.module.css";
import mail from "../../assets/mail.svg";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>© SwiftVote 2023</p>
      <div className={classes.row}>
        <img className={classes.mail} src={mail} alt="mail-img" />
        <p>swiftvote@gmail.com</p>
      </div>
    </div>
  );
}
