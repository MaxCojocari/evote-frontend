"use client";
import { useEffect, useState } from "react";
import Ballot from "../../components/Ballot";
import FooterVoting from "../../components/FooterVoting";
import Sidebar from "../../components/Sidebar";
import { Election, VotingStep } from "../../types/types";
import classes from "./styles.module.css";
import { getElections } from "../../services/election.service";

export default function VotingChooseCampaign() {
  const [elections, setElections] = useState<Election[]>([]);

  useEffect(() => {
    getElections().then((res) => setElections(res?.data));
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
        <Ballot
          votingState={VotingStep.CHOOSE_CAMPAIGN}
          ballotName={"Votare"}
          choices={elections}
          choicePage={false}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
