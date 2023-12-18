import axios from "axios";
import { API_URL } from "../config/config";
import { axiosAuthHeader } from "../config/auth.config";

export const generateOtp = async (data: Object) => {
  return axios
    .post(`${API_URL}/api/authen/2fa/generateOtp`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const twoFactorAuthAuthenticate = async (data: Object) => {
  return axios
    .post(`${API_URL}/api/authen/2fa/authenticate`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const generateToken = async (data: Object) => {
  return axios
    .post(
      `${API_URL}/api/authen/auth/generate-token`,
      { ...data },
      await axiosAuthHeader()
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      return e.response;
    });
};

export const verifyToken = async (data: Object) => {
  return axios
    .post(`${API_URL}/api/authen/auth/verify-token`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => console.log(e));
};

export const registerUser = async (data: Object) => {
  return axios
    .post(`${API_URL}/api/authen/auth/register`, { ...data })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      return e.response;
    });
};

export const getAuthenticatedUser = async (accessToken: string) => {
  return axios
    .get(`${API_URL}/api/users/authenticated-user`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
};
