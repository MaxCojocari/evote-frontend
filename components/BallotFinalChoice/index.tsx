import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Wizard from "../Wizard";
import { Choice, Election } from "../../types/types";
import { useEffect, useState } from "react";
import classes from "./styles.module.css";
import BallotHeader from "../BallotHeader";
import { getElectionById, submitVote } from "../../services/election.service";

export default function BallotFinalChoice({ ballotName, votingState }: any) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [election, setElection] = useState<Election>();
  const [candidate, setCandidate] = useState<Choice>();

  const handleConfirmClick = async () => {
    const res = await submitVote({
      election_id: +(election?.id as string),
      choice_id: +(candidate?.id as string),
    });

    if (res && res?.response && res?.response?.status !== 201) {
      router.replace(
        `/voting/done?election_id=${election?.id}&error_status=${res?.response?.status}`
      );
      return;
    }
    router.replace(`/voting/done?election_id=${election?.id}`);
  };

  useEffect(() => {
    const electionId = searchParams.get("election_id") as string;
    const choiceId = searchParams.get("choice_id") as string;

    getElectionById(electionId).then((res) => {
      const election = res?.data as Election;
      setElection(election);
      const candidate = election?.choices?.find(
        (choice: Choice) => choice.id.toString() === choiceId
      );
      setCandidate(candidate);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                src={`/${candidate?.img}`}
                alt="img-choice"
                width={0}
                height={0}
                sizes="100vw"
              />
              <div className={classes.text}>
                {(candidate?.description as string)?.toUpperCase()}
              </div>
            </div>
          </div>
          <div className={classes.buttons}>
            <button
              className={classes.buttonReject}
              onClick={() =>
                router.replace(`/voting/choices?election_id=${election?.id}`)
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
