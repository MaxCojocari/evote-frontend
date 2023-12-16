"use client";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useRouter, useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import FooterVoting from "../../../components/FooterVoting";
import VotedSuccessfully from "../../../components/VotedSuccessfully";
import { useEffect, useState } from "react";
import { getElectionById } from "../../../services/election.service";

export default function VotingDone() {
  const [election, setElection] = useState<Election>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("election_id");
    getElectionById(id as string).then((res) => {
      setElection(res?.data);
    });
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
        <VotedSuccessfully
          ballotName={election?.description}
          votingState={VotingStep.VOTED}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
