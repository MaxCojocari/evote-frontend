import Image from "next/image";
import classes from "./styles.module.css";

export default function ElectionBox({ electionName, img }: any) {
  return (
    <div className={classes.main}>
      <Image className={classes.img} src={img} alt={"img"} />
      <div className={classes.text}>{electionName}</div>
    </div>
  );
}
