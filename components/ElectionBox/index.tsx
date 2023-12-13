"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import Link from "next/link";

export default function ElectionBox({ electionName, img }: any) {
  const handleClick = (str: string) => {
    console.log(str);
  };

  return (
    <Link
      href={"/voting/choose-candidate"}
      style={{
        textDecoration: "none",
      }}
    >
      <div className={classes.main} onClick={() => handleClick(electionName)}>
        <Image className={classes.img} src={img} alt={"img"} />
        <div className={classes.text}>{electionName}</div>
      </div>
    </Link>
  );
}
