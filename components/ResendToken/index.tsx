"use client";
import classes from "./styles.module.css";
import { generateOtp } from "../../services/auth.service";

export default function ResendToken({ baseText, hrefText }: any) {
  const resendToken = async () => {
    const id = localStorage.getItem("userId");
    const res = await generateOtp({ id });
    console.log("new otp: ", res?.data);
    // await sendSms({phone: phoneNr, data: resOtp?.data.totp_code})
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
