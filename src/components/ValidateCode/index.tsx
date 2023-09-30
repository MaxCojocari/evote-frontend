import { useState } from "react";
import CodeInput from "../CodeInput";
import classes from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export default function ValidateCode({ buttonName }: any) {
  const [result, setResult] = useState("");
  const navigate = useNavigate();
  const changeHandler = (res: string) => {
    setResult(res);
  };

  const confirmToken = () => {
    console.log("Send Token: ", result);
    setTimeout(() => {
      navigate(`/signin`);
    }, 1000);
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
