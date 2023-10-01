import LogInInput from "../LogInInput";
import RowText from "../../RowText";
import SupportText from "../../SupportText";
import classes from "./styles.module.css";

export default function LogInForm({
  supportText,
  baseText,
  hrefText,
  redirectUrl,
  loginRedirectRelativeUrl,
}: any) {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <SupportText content={supportText} />
        <LogInInput loginRedirectRelativeUrl={loginRedirectRelativeUrl} />
        <RowText
          baseText={baseText}
          hrefText={hrefText}
          redirectUrl={redirectUrl}
        />
      </div>
    </div>
  );
}
