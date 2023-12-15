"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import Link from "next/link";

export default function ElectionBox({ boxName, img }: any) {
  return (
    <Link
      href={{
        pathname: "/voting/choices",
        query: { election_id: "ab0ded4b-9151-46b1-85a4-0317ca2b407f" },
      }}
      style={{
        textDecoration: "none",
      }}
    >
      <div className={classes.main}>
        <Image
          className={classes.img}
          src={img}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className={classes.text}>{boxName}</div>
      </div>
    </Link>
  );
}
