"use client";
import { useEffect, useState } from "react";
import CodeInput from "../CodeInput";
import classes from "./styles.module.css";
import { useRouter } from "next/navigation";
import { generateToken, getUserById } from "../../services/auth.service";
import { signIn } from "next-auth/react";

export default function ValidateCode({
  buttonName,
  buttonRedirectRelativeUrl,
  isReceiveToken,
}: any) {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("+12345678901");
  const router = useRouter();
  const changeHandler = (res: string) => {
    setResult(res);
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    getUserById(id as string).then((res) => {
      setPhone(res?.data.phone);
    });
  }, []);

  const confirmToken = async () => {
    if (result.length === 6) {
      const id = localStorage.getItem("userId");

      let credentials = {
        id,
        totp_code: result,
      };
      let options = {
        ...credentials,
        redirect: false,
      };

      const res = await signIn("credentials", options);
      console.log(res);

      if (res?.status === 401) {
        setError("Codul este incorect!");
        return;
      }

      if (isReceiveToken) {
        const res = await generateToken({ id });
        if (res?.status === 202 || res?.status === 200) {
          const token = res?.data.token.token_value;
          console.log("Unique token: ", token);
          setError("");
          // await sendSms({
          //   phone: phoneNr,
          //   data: token,
          // });
          setTimeout(() => {
            router.push(buttonRedirectRelativeUrl);
          }, 1000);
        } else if (res?.status === 400) {
          setError("Dvs deja aveti token-ul!");
        } else {
          setError("Codul este incorect!");
        }
        return;
      }

      setError("");
      setTimeout(() => {
        router.push(buttonRedirectRelativeUrl);
      }, 1000);
    }
  };

  return (
    <div className={classes.content}>
      <div>
        <CodeInput handleOnChange={changeHandler} />
        <p className={classes.error}>{error}</p>
      </div>
      <div className={classes.actions}>
        <button
          className={classes.receiveTokenButton}
          onClick={() => confirmToken()}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
}
