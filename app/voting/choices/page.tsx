"use client";
import Ballot from "../../../components/Ballot";
import Sidebar from "../../../components/Sidebar";
import { Election, VotingStep } from "../../../types/types";
import { useSearchParams } from "next/navigation";
import classes from "../styles.module.css";
import { useEffect, useState } from "react";
import FooterVoting from "../../../components/FooterVoting";
import { getElectionById } from "../../../services/election.service";

export default function VotingChoice() {
  const [election, setElection] = useState<Election>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("election_id");
    getElectionById(id as string).then((res) => {
      setElection(res?.data);
      console.log(id);
      console.log("election: ", res?.data);
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
        <Ballot
          votingState={VotingStep.CHOOSE_CANDIDATE}
          ballotName={election?.description}
          choices={election?.choices}
          choicePage={true}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
