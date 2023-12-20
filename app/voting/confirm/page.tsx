"use client";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import { useEffect, useState } from "react";
import FooterVoting from "../../../components/FooterVoting";
import BallotFinalChoice from "../../../components/BallotFinalChoice";
import { getElectionById } from "../../../services/election.service";
import { useSession } from "next-auth/react";
import BallotError from "../../../components/BallotError";

export default function VotingChoice() {
  const [election, setElection] = useState<Election>();
  const searchParams = useSearchParams();
  const { status } = useSession();

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
        {status === "authenticated" && (
          <BallotFinalChoice
            ballotName={election?.description}
            votingState={VotingStep.CONFIRM_VOTE}
          />
        )}
        {status === "unauthenticated" && <BallotError />}
        <FooterVoting />
      </div>
    </div>
  );
}
