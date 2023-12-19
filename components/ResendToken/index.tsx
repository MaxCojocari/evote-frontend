"use client";
import classes from "./styles.module.css";
import { generateOtp } from "../../services/auth.service";
import { getUserById } from "../../services/user.service";
import { sendSms } from "../../services/sms.service";

export default function ResendToken({ baseText, hrefText }: any) {
  const resendToken = async () => {
    const id = localStorage.getItem("userId");
    const resGetUser = await getUserById(id as string);
    const phoneNr = resGetUser?.data.phone;
    const res = await generateOtp({ id });
    const data = `Codul de autentificare: ${res?.data["totp_code"]}`;

    const resSms = await sendSms({ to: phoneNr, data });
    if (resSms && resSms?.status !== 200) return;
  };

  return (
    <div className={classes.row}>
      <p>
        {baseText}{" "}
        <span
          style={{
            textDecoration: "none",
            color: "var(--primary-700, #6941C6)",
            /* Text sm/Semibold */
            fontFamily: "Inter",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: "600",
            lineHeight: "20px" /* 142.857% */,
            cursor: "pointer",
          }}
          onClick={resendToken}
        >
          {hrefText}
        </span>
      </p>
    </div>
  );
}
