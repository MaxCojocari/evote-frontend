import classes from "./styles.module.css";
import mail from "../../public/mail.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={classes.footer}>
      <p>© SwiftVote 2023</p>
      <div className={classes.row}>
        <Image className={classes.mail} src={mail} alt="mail-img" />
        <p>swiftvote@gmail.com</p>
      </div>
    </div>
  );
}
