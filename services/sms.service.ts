import axios from "axios";
import { API_URL } from "../config/config";

export const sendSms = (data: Object) => {
  const test = true;
  console.log("Send sms: ", data);
  if (!test) {
    return axios
      .post(`${API_URL}/api/authen/send-sms`, { ...data })
      .then((res) => {
        return res;
      })
      .catch((e) => {
        console.log(e);
        return e.response;
      });
  }
};
