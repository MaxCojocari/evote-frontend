"use client";
import { VotingStep, WizardStepStatus } from "../../types/types";
import WizardStep from "../WizardStep";
import classes from "./styles.module.css";

export default function Wizard({ votingState }: any) {
  return (
    <>
      {votingState === VotingStep.CHOOSE_CAMPAIGN && (
        <div className={classes.main}>
          <WizardStep
            stepNr={"1"}
            status={WizardStepStatus.IN_PROGRESS}
            name={"Alege campania"}
          />
          <WizardStep
            stepNr={"2"}
            status={WizardStepStatus.ON_HOLD}
            name={"Alege candidatul"}
          />
          <WizardStep
            stepNr={"3"}
            status={WizardStepStatus.ON_HOLD}
            name={"Confirmă votul"}
          />
          <WizardStep
            stepNr={"4"}
            status={WizardStepStatus.ON_HOLD}
            name={"Votat!"}
          />
        </div>
      )}
      {votingState === VotingStep.CHOOSE_CANDIDATE && (
        <div className={classes.main}>
          <WizardStep
            stepNr={"1"}
            status={WizardStepStatus.DONE}
            name={"Alege campania"}
          />
          <WizardStep
            stepNr={"2"}
            status={WizardStepStatus.IN_PROGRESS}
            name={"Alege candidatul"}
          />
          <WizardStep
            stepNr={"3"}
            status={WizardStepStatus.ON_HOLD}
            name={"Confirmă votul"}
          />
          <WizardStep
            stepNr={"4"}
            status={WizardStepStatus.ON_HOLD}
            name={"Votat!"}
          />
        </div>
      )}
      {votingState === VotingStep.CONFIRM_VOTE && (
        <div className={classes.main}>
          <WizardStep
            stepNr={"1"}
            status={WizardStepStatus.DONE}
            name={"Alege campania"}
          />
          <WizardStep
            stepNr={"2"}
            status={WizardStepStatus.DONE}
            name={"Alege candidatul"}
          />
          <WizardStep
            stepNr={"3"}
            status={WizardStepStatus.IN_PROGRESS}
            name={"Confirmă votul"}
          />
          <WizardStep
            stepNr={"4"}
            status={WizardStepStatus.ON_HOLD}
            name={"Votat!"}
          />
        </div>
      )}
      {votingState === VotingStep.VOTED && (
        <div className={classes.main}>
          <WizardStep
            stepNr={"1"}
            status={WizardStepStatus.SUCCESS}
            name={"Alege campania"}
          />
          <WizardStep
            stepNr={"2"}
            status={WizardStepStatus.SUCCESS}
            name={"Alege candidatul"}
          />
          <WizardStep
            stepNr={"3"}
            status={WizardStepStatus.SUCCESS}
            name={"Confirmă votul"}
          />
          <WizardStep
            stepNr={"4"}
            status={WizardStepStatus.SUCCESS}
            name={"Votat!"}
          />
        </div>
      )}
    </>
  );
}
