"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import Link from "next/link";

export default function ElectionBox({ choice }: any) {
  return (
    <Link
      href={{
        pathname: "/voting/choices",
        query: { election_id: choice.id },
      }}
      style={{
        textDecoration: "none",
      }}
    >
      <div className={classes.main}>
        <Image
          className={classes.img}
          src={`/${choice.img}`}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className={classes.text}>{choice.description}</div>
      </div>
    </Link>
  );
}
