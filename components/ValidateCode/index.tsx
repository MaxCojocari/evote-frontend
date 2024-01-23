"use client";
import { useEffect, useState } from "react";
import CodeInput from "../CodeInput";
import classes from "./styles.module.css";
import { useRouter } from "next/navigation";
import { generateToken } from "../../services/auth.service";
import { signIn, signOut } from "next-auth/react";
import { getUserById } from "../../services/user.service";
import { sendSms } from "../../services/sms.service";

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
  const id = localStorage.getItem("userId");

  useEffect(() => {
    getUserById(id as string).then((res) => {
      setPhone(res?.data?.phone);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const confirmToken = async () => {
    if (result.length === 6) {
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
        signOut({ redirect: false });
        if (res?.status === 202 || res?.status === 200) {
          const token = res?.data.token.token_value;
          const data = `Tokenul personal: ${token}\nAtentie! Nu comunicati acest token altor persoane!`;
          setError("");

          const resGetUser = await getUserById(id as string);
          const phoneNr = resGetUser?.data.phone;
          const resSms = await sendSms({ to: phoneNr, data });

          if (resSms && resSms?.status !== 200) return;
          setTimeout(() => {
            router.push(buttonRedirectRelativeUrl);
          }, 1000);
        } else if (res?.status === 400) {
          setError("Dvs deja aveti token-ul!");
        } else {
          setError("Codul este incorect!");
        }
        // localStorage.removeItem("userId");
        return;
      }
      setError("");
      setTimeout(() => {
        router.push(buttonRedirectRelativeUrl);
      }, 1000);
    }
    // localStorage.removeItem("userId");
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
