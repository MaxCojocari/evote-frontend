import Image from "next/image";
import classes from "./styles.module.css";

export default function AuthRightSection({ img }: any) {
  return (
    <div className={classes.rightSection}>
      <Image className={classes.img} src={img} alt="auth-img" />
    </div>
  );
}
