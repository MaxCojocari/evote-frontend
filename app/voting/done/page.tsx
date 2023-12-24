"use client";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import FooterVoting from "../../../components/FooterVoting";
import VotedSuccessfully from "../../../components/VotedSuccessfully";
import { useEffect, useState } from "react";
import { getElectionById } from "../../../services/election.service";
import { useSession } from "next-auth/react";
import BallotError from "../../../components/BallotError";
import { getReasonPhrase } from "http-status-codes";

export default function VotingDone() {
  const [election, setElection] = useState<Election>();
  const searchParams = useSearchParams();
  const { status } = useSession();
  const errorCode = searchParams.get("error_status");

  useEffect(() => {
    const id = searchParams.get("election_id");
    if (status === "authenticated") {
      getElectionById(id as string).then((res) => {
        setElection(res?.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.main}>
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {status === "authenticated" && !errorCode && (
          <VotedSuccessfully
            ballotName={election?.description}
            votingState={VotingStep.VOTED}
          />
        )}
        {status === "unauthenticated" && <BallotError />}
        {errorCode && (
          <BallotError
            errorCode={errorCode}
            errorData={
              errorCode === "400"
                ? "Dvs deja ați votat în aceste alegeri!"
                : getReasonPhrase(errorCode)
            }
          />
        )}
        <FooterVoting />
      </div>
    </div>
  );
}
