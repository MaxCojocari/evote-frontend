"use client";
import { useEffect, useState } from "react";
import CodeInput from "../CodeInput";
import classes from "./styles.module.css";
import { useRouter } from "next/navigation";
import {
  generateOtp,
  generateToken,
  twoFactorAuthAuthenticate,
  verifyToken,
} from "../../services/auth.service";

export default function ValidateCode({
  buttonName,
  buttonRedirectRelativeUrl,
  isReceiveToken,
}: any) {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const changeHandler = (res: string) => {
    setResult(res);
  };

  //   useEffect(() => {
  //     generateOtp();
  //   }, []);

  const confirmToken = async () => {
    if (result.length === 6) {
      console.log("Send OTP: ", { twoFactorAuthenticationCode: result });
      console.log("Gen token", isReceiveToken);

      //   const res = await twoFactorAuthAuthenticate({
      //     twoFactorAuthenticationCode: result,
      //   });
      //   if (res?.status === 200) {
      //     router.push(buttonRedirectRelativeUrl);
      //     if (isReceiveToken) {
      //       generateToken();
      //     }
      //   } else {
      //     setError("Codul este incorect!");
      //   }

      setTimeout(() => {
        router.push(buttonRedirectRelativeUrl);
      }, 1000);
    }
  };

  return (
    <div className={classes.content}>
      <CodeInput handleOnChange={changeHandler} />
      <div className={classes.actions}>
        <button className={classes.receiveTokenButton} onClick={confirmToken}>
          {buttonName}
        </button>
      </div>
    </div>
  );
}
