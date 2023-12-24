export enum VotingStep {
  CHOOSE_CAMPAIGN,
  CHOOSE_CANDIDATE,
  CONFIRM_VOTE,
  VOTED,
}

export enum WizardStepStatus {
  ON_HOLD,
  IN_PROGRESS,
  DONE,
  SUCCESS,
}

export type Choice = {
  id: string;
  description: string;
  img: string;
};

export type Election = {
  id: string;
  description: string;
  img: string;
  choices: Choice[];
};
