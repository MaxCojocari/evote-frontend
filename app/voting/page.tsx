import Ballot from "../../components/Ballot";
import FooterVoting from "../../components/FooterVoting";
import Sidebar from "../../components/Sidebar";
import { elections } from "../../mockData";
import { VotingStep } from "../../types/types";
import classes from "./styles.module.css";

export default function VotingChooseCampaign() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ballot
          votingState={VotingStep.CHOOSE_CAMPAIGN}
          ballotName={"Votare"}
          electionsOrCandidates={elections}
          choicePage={false}
        />
        <FooterVoting />
      </div>
    </div>
  );
}
