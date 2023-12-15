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
