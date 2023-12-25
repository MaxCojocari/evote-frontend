"use client";
import { useCallback, useEffect, useState } from "react";
import Ballot from "../../components/Ballot";
import FooterVoting from "../../components/FooterVoting";
import Sidebar from "../../components/Sidebar";
import { Election, VotingStep } from "../../types/types";
import classes from "./styles.module.css";
import {
  areElectionsAvailableForVoting,
  getElections,
} from "../../services/election.service";
import { useSession } from "next-auth/react";
import BallotError from "../../components/BallotError";

export default function VotingChooseCampaign() {
  const [elections, setElections] = useState<Election[]>([]);
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const { status } = useSession();

  const areElectionsAvailable = useCallback(async () => {
    const id = localStorage.getItem("userId");
    const res = await areElectionsAvailableForVoting(id as string);
    setHasVoted(res);
  }, []);

  useEffect(() => {
    areElectionsAvailable();
  }, [areElectionsAvailable]);

  useEffect(() => {
    if (status === "authenticated") {
      getElections().then((res) => setElections(res?.data));
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
          justifyContent: "space-between",
        }}
      >
        {status === "authenticated" && !hasVoted && (
          <Ballot
            votingState={VotingStep.CHOOSE_CAMPAIGN}
            ballotName={"Votare"}
            choices={elections}
            choicePage={false}
          />
        )}
        {status === "unauthenticated" && <BallotError />}
        {hasVoted && status === "authenticated" && (
          <BallotError
            errorCode={"400"}
            errorData={"Nu sunt alegeri de votat!"}
          />
        )}
        <FooterVoting />
      </div>
    </div>
  );
}
