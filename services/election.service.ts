import axios from "axios";
import { API_URL } from "../config/config";
import { axiosAuthHeader } from "../config/auth.config";
import { Election } from "../types/types";

export const getElections = async () => {
  return axios
    .get(`${API_URL}/api/elections/extended-elections`, await axiosAuthHeader())
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const getElectionById = async (id: string) => {
  return axios
    .get(
      `${API_URL}/api/elections/extended-elections/${id}`,
      await axiosAuthHeader()
    )
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const submitVote = async (data: Object) => {
  return axios
    .post(
      `${API_URL}/api/electionhistory/vote`,
      { ...data },
      await axiosAuthHeader()
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

export const getVotingStatus = async (id: string) => {
  return axios
    .get(`${API_URL}/api/userhistory/vote/${id}`)
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const areElectionsAvailableForVoting = async (id: string) => {
  const resGet = await getElections();
  const allElectionIds = resGet?.data.map((election: Election) => election.id);
  const resElectionsVoted = await getVotingStatus(id as string);
  const electionsVotedIds = resElectionsVoted?.data.map(
    (item: any) => item.election_id
  );
  return arraysEqual(allElectionIds, electionsVotedIds);
};

function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1?.length !== arr2?.length) return false;

  if (arr1 && arr2) {
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    for (let i = 0; i < sortedArr1?.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
        return false;
      }
    }
  }

  return true;
}
