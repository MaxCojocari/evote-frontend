"use client";
import Image from "next/image";
import classes from "./styles.module.css";
import choiceCircle from "../../public/choiceCircle.svg";
import choicePendingCircle from "../../public/circle_pending_voted.svg";
import { Choice } from "../../types/types";

export default function ChoiceBox({
  choice,
  isSelected,
  handleSelected,
}: {
  choice: Choice;
  isSelected: boolean;
  handleSelected: (id: string) => void;
}) {
  return (
    <div className={classes.main} onClick={() => handleSelected(choice.id)}>
      <Image
        className={classes.img}
        src={`/${choice.img}`}
        alt="img-choice"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className={classes.text}>
        {(choice.description as string).toUpperCase()}
      </div>
      {isSelected ? (
        <Image
          className={classes.circle}
          src={choicePendingCircle}
          alt="img-pending-vote"
          width={0}
          height={0}
          sizes="100vw"
        />
      ) : (
        <Image
          className={classes.circle}
          src={choiceCircle}
          alt="img-empty"
          width={0}
          height={0}
          sizes="100vw"
        />
      )}
    </div>
  );
}
