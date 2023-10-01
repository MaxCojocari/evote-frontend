import LogInInput from "../LogInInput";
import RowText from "../../RowText";
import SupportText from "../../SupportText";
import classes from "./styles.module.css";

export default function SignUpForm({
  supportText,
  baseText,
  hrefText,
  redirectUrl,
}: any) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <SupportText content={supportText} />
        <LogInInput />
        <RowText
          baseText={baseText}
          hrefText={hrefText}
          redirectUrl={redirectUrl}
        />
      </div>
    </div>
  );
}
