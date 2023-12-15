"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import Link from "next/link";
import choiceCircle from "../../public/choiceCircle.svg";

export default function ChoiceBox({ boxName, img }: any) {
  return (
    <div className={classes.main}>
      <Image
        className={classes.img}
        src={img}
        alt="img"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className={classes.text}>{(boxName as string).toUpperCase()}</div>
      <Image
        className={classes.circle}
        src={choiceCircle}
        alt="img"
        width={0}
        height={0}
        sizes="100vw"
      />
    </div>
  );
}
