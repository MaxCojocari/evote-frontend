"use client";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useRouter, useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import FooterVoting from "../../../components/FooterVoting";
import VotedSuccessfully from "../../../components/VotedSuccessfully";
import { useEffect, useState } from "react";
import { elections } from "../../../mockData";

export default function VotingDone() {
  const [electionName, setElectionName] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const getElection = (id: string): Election => {
    return elections.filter((ballot) => (ballot.id = id))[0];
  };

  useEffect(() => {
    const id = searchParams.get("election_id");
    if (!id) {
      router.push("/voting");
      return;
    }
    const election = getElection(id as string);
    setElectionName(election.description);
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
        <VotedSuccessfully
          ballotName={electionName}
          votingState={VotingStep.VOTED}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
