import axios from "axios";
import { API_URL } from "../config/config";

export const getElections = () => {
  return axios
    .get(`${API_URL}/elections`)
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const getElectionById = (id: string) => {
  return axios
    .get(`${API_URL}/elections/${id}`)
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const getChoiceFromElection = (params: Object) => {
  return axios
    .get(`${API_URL}/elections`, { params })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};
