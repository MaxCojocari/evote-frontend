import classes from "./styles.module.css";
import AuthCode from "react-auth-code-input";
import "./index.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/user.service";

export default function CodeInput({ handleOnChange }: any) {
  const [phone, setPhone] = useState("+12345678901");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    getUserById(id as string).then((res) => {
      setPhone(res?.data?.phone);
    });
  }, []);

  function getDottedTelNr(telNr: string) {
    return "0" + telNr?.slice(4, 5) + "****" + telNr?.slice(9, 12);
  }

  return (
    <div className={classes.inputWithLabel}>
      <p className={classes.helperText}>
        Introdu codul care a venit pe numărul {getDottedTelNr(phone)}
      </p>
      <AuthCode
        onChange={handleOnChange}
        containerClassName="container"
        inputClassName="input"
        allowedCharacters={"numeric"}
      />
    </div>
  );
}
