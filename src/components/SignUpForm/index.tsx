import RowText from "../RowText";
import SignUpInput from "../SignUpInput";
import SupportText from "../SupportText";
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
        <SignUpInput />
        <RowText
          baseText={baseText}
          hrefText={hrefText}
          redirectUrl={redirectUrl}
        />
      </div>
    </div>
  );
}
