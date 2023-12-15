"use client";
import ChoiceBox from "../ChoiceBox";
import classes from "./styles.module.css";
import { Choice } from "../../types/types";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type StateTracker = { choice: Choice; active: boolean };

export default function ChoicesContainer({ choices }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [localChoicesState, setLocalChoicesState] = useState<StateTracker[]>(
    choices.map((choice: Choice) => ({
      choice,
      active: false,
    }))
  );

  const handleChoiceSelection = (id: string) => {
    const currentChoiceState = [...localChoicesState];
    setLocalChoicesState(
      currentChoiceState.map((state: StateTracker) =>
        state.choice.id === id
          ? ({ choice: state.choice, active: true } as any)
          : ({ choice: state.choice, active: false } as any)
      )
    );
    console.log(localChoicesState);
  };

  const handleVoteClick = () => {
    const electionId = searchParams.get("election_id");
    const choice = localChoicesState.filter(
      (item: StateTracker) => item.active
    )[0];
    if (choice) {
      router.push(
        `/voting/confirm?election_id=${electionId}&choice_id=${choice.choice.id}`
      );
    }
  };

  useEffect(() => {
    setLocalChoicesState(
      choices.map((choice: Choice) => ({
        choice,
        active: false,
      }))
    );
    console.log(localChoicesState);
  }, [choices]);

  return (
    <>
      <div className={classes.main}>
        {localChoicesState.map((item: StateTracker, index: number) => (
          <ChoiceBox
            key={index}
            choice={item.choice}
            isSelected={item.active}
            handleSelected={handleChoiceSelection}
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
        <button
          className={classes.voteButton}
          onClick={() => handleVoteClick()}
        >
          <div className={classes.buttonText}>Votează</div>
        </button>
      </div>
    </>
  );
}
