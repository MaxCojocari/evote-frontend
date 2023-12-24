import axios from "axios";
import { API_URL } from "../config/config";

export const getUserById = async (id: string) => {
  return axios
    .get(`${API_URL}/api/users/${id}`)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
