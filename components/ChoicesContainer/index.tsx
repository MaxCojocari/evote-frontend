"use client";
import Link from "next/link";
import ChoiceBox from "../ChoiceBox";
import classes from "./styles.module.css";
import { Choice } from "../../types/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChoicesContainer({ choices }: any) {
  const searchParams = useSearchParams();
  const [localChoices, setLocalChoices] = useState([{}]);

  useEffect(() => {
    const localChoices = choices.map((choice: Choice) => {
      choice;
      isSelected: false;
    });
    console.log(localChoices);

    setLocalChoices(localChoices);
  }, [choices]);

  const handleChoiceSelection = () => {};

  return (
    <>
      <div className={classes.main}>
        {choices.map((choice: Choice, index: any) => (
          <ChoiceBox
            key={index}
            choice={choice}
            isSelected={false}
            handleChoiceSelection={handleChoiceSelection}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={{
            pathname: "/voting/confirm",
            query: {
              election_id: "ab0ded4b-9151-46b1-85a4-0317ca2b407f",
              candidate_id: "2",
            },
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <button className={classes.voteButton}>
            <div className={classes.buttonText}>Votează</div>
          </button>
        </Link>
      </div>
    </>
  );
}
