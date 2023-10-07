import classes from "./styles.module.css";
import AuthCode from "react-auth-code-input";
import "./index.css";
import { useEffect } from "react";
import { generateSecret } from "../../services/auth.service";

export default function CodeInput({ handleOnChange }: any) {
  const telNr = "078999905";

  function getDottedTelNr(telNr: string) {
    return telNr.slice(0, 2) + "****" + telNr.slice(6, 10);
  }

  return (
    <div className={classes.inputWithLabel}>
      <p className={classes.helperText}>
        Introdu codul care a venit pe numărul {getDottedTelNr(telNr)}
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
