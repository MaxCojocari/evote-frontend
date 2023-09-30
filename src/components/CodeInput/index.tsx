import classes from "./styles.module.css";
import AuthCode from "react-auth-code-input";
import "./index.css";

export default function CodeInput({ handleOnChange }: any) {
  //   const [result, setResult] = useState("");
  const telNr = "078999905";

  function getDottedTelNr(telNr: string) {
    return telNr.slice(0, 2) + "****" + telNr.slice(6, 10);
  }

  //   const handleOnChange = (res: string) => {
  //     setResult(res);
  //     console.log("Token: ", result);
  //   };

  return (
    <div className={classes.inputWithLabel}>
      <p className={classes.helperText}>
        Introdu codul care a venit pe numărul {getDottedTelNr(telNr)}
      </p>
      <AuthCode
        onChange={handleOnChange}
        containerClassName="container"
        inputClassName="input"
      />
    </div>
  );
}
