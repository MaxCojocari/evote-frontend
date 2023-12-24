"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function ElectionBox({ choice }: any) {
  const router = useRouter();

  return (
    <div
      className={classes.main}
      onClick={() => router.replace(`/voting/choices?election_id=${choice.id}`)}
    >
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
  );
}
