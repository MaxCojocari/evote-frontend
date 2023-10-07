import axios from "axios";
import { API_URL } from "../config/config";
import { axiosAuthHeader } from "../config/auth.config";

export const generateSecret = async () => {
  return axios
    .post(`${API_URL}/2fa/generate`)
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const twoFactorAuthAuthenticate = async (data: Object) => {
  return axios
    .post(`${API_URL}/2fa/authenticate`, { ...data }, await axiosAuthHeader())
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const verifyToken = async (data: Object) => {
  return axios
    .post(`${API_URL}/auth/verify-token`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const registerUser = async (data: Object) => {
  return axios
    .post(`${API_URL}/auth/register`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const getAuthenticatedUser = async (accessToken: string) => {
  return axios
    .get(`${API_URL}/users/authenticated-user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
