"use client";
import { useEffect, useState } from "react";
import Ballot from "../../components/Ballot";
import FooterVoting from "../../components/FooterVoting";
import Sidebar from "../../components/Sidebar";
import { Election, VotingStep } from "../../types/types";
import classes from "./styles.module.css";
import { getElections } from "../../services/election.service";
import { useSession } from "next-auth/react";
import BallotError from "../../components/BallotError";

export default function VotingChooseCampaign() {
  const [elections, setElections] = useState<Election[]>([]);
  const { status } = useSession();

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
        {status === "authenticated" && (
          <Ballot
            votingState={VotingStep.CHOOSE_CAMPAIGN}
            ballotName={"Votare"}
            choices={elections}
            choicePage={false}
          />
        )}
        {status === "unauthenticated" && <BallotError />}
        <FooterVoting />
      </div>
    </div>
  );
}
