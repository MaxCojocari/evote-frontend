import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Wizard from "../Wizard";
import { Choice } from "../../types/types";
import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import BallotHeader from "../BallotHeader";
import { elections } from "../../mockData";

export default function BallotFinalChoice({ ballotName, votingState }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [electionId, setElectionId] = useState<string>(
    searchParams.get("election_id") as string
  );
  const [choiceId, setChoiceId] = useState<string>(
    searchParams.get("choice_id") as string
  );

  const getCandidate = (electionId: string, choiceId: string): Choice => {
    const election = elections.filter((ballot) => ballot.id === electionId)[0];
    return election.choices.filter((choice) => choice.id === choiceId)[0];
  };

  const [candidate, setCandidate] = useState<Choice>(
    getCandidate(electionId, choiceId)
  );

  const handleConfirmClick = () => {
    if (candidate) {
      router.push(`/voting/done?election_id=${electionId}`);
    }
  };

  useEffect(() => {
    const electionId = searchParams.get("election_id") as string;
    const choiceId = searchParams.get("choice_id") as string;
    const candidate = getCandidate(electionId, choiceId);
    setElectionId(electionId);
    setChoiceId(choiceId);
    setCandidate(candidate);
  }, [searchParams]);

  return (
    <div className={classes.main}>
      <BallotHeader text={ballotName} />
      <Wizard votingState={votingState} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={classes.warningBlock}>
          <div className={classes.heading}>
            <p
              style={{
                color: "#7F56D9",
                textAlign: "center",
                fontFamily: "Inter",
                fontSize: "46.739px",
                fontStyle: "normal",
                fontWeight: "600",
                lineHeight: "28.043px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Dorești să votezi pentru:
            </p>
          </div>
          <div className={classes.choiceFinalCard}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "100px",
              }}
            >
              <Image
                className={classes.img}
                src={`/${candidate.img}`}
                alt="img-choice"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className={classes.text}>
                {(candidate.description as string).toUpperCase()}
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <button
              className={classes.buttonReject}
              onClick={() =>
                router.push(`/voting/choices?election_id=${electionId}`)
              }
            >
              <p>Anulează</p>
            </button>
            <button
              className={classes.buttonConfirm}
              onClick={() => handleConfirmClick()}
            >
              <p>Confirmă</p>
            </button>
          </div>
          <div className={classes.remark}>
            *Această acțiune este ireversibilă
          </div>
        </div>
      </div>
    </div>
  );
}
