"use client";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import { useCallback, useEffect, useState } from "react";
import FooterVoting from "../../../components/FooterVoting";
import BallotFinalChoice from "../../../components/BallotFinalChoice";
import {
  areElectionsAvailableForVoting,
  electionVoted,
  getElectionById,
} from "../../../services/election.service";
import { useSession } from "next-auth/react";
import BallotError from "../../../components/BallotError";

export default function VotingChoice() {
  const [election, setElection] = useState<Election>();
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();

  const areElectionsAvailable = useCallback(async () => {
    const userId = (session?.user as any)?.id;
    const electionId = searchParams.get("election_id");
    const res = await electionVoted(userId, electionId as string);
    setHasVoted(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    areElectionsAvailable();
  }, [areElectionsAvailable]);

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
        {status === "authenticated" && !hasVoted && (
          <BallotFinalChoice
            ballotName={election?.description}
            votingState={VotingStep.CONFIRM_VOTE}
          />
        )}
        {status === "unauthenticated" && <BallotError />}
        {hasVoted && status === "authenticated" && (
          <BallotError
            errorCode={"400"}
            errorData={"Dvs ați votat în aceste alegeri!"}
          />
        )}
        <FooterVoting />
      </div>
    </div>
  );
}
