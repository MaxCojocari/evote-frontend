import axios from "axios";
import { API_URL } from "../config/config";
import { axiosAuthHeader } from "../config/auth.config";

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
    .catch((e) => console.log(e));
};

// export const getElections = () => {
//   return axios
//     .get(`${API_URL}/elections`)
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => console.log(e));
// };

// export const getElectionById = (id: string) => {
//   return axios
//     .get(`${API_URL}/elections/${id}`)
//     .then((res) => {
//       return res;
//     })
//     .catch((e) => console.log(e));
// };

// export const submitVote = async (data: Object) => {
//   console.log(data);
//   return null;
// };
