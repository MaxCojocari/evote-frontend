"use client";
import Ballot from "../../../components/Ballot";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useRouter, useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import { elections } from "../../../mockData";
import { useEffect, useState } from "react";
import FooterVoting from "../../../components/FooterVoting";

export default function VotingChoice() {
  const [electionName, setElectionName] = useState("");
  const [choices, setChoices] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const getElection = (id: string): Election => {
    return elections.filter((ballot) => ballot.id === id)[0];
  };

  useEffect(() => {
    const id = searchParams.get("election_id");
    if (!id) {
      router.push("/voting");
      return;
    }
    const election = getElection(id as string);

    setElectionName(election.description);
    setChoices(election.choices as any);
  }, [searchParams, router]);

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
        <Ballot
          votingState={VotingStep.CHOOSE_CANDIDATE}
          ballotName={electionName}
          choices={choices}
          choicePage={true}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
