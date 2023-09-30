import classes from "./styles.module.css";
import SupportText from "../SupportText";
import ValidationCode from "../ValidationCode";
import RowText from "../RowText";

export default function ReceiveTokenForm({
  supportText,
  buttonName,
  baseText,
  hrefText,
  redirectUrl,
}: any) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.receiveTokenContent}>
          <SupportText content={supportText} />
          <ValidationCode />
          <RowText
            baseText={baseText}
            hrefText={hrefText}
            redirectUrl={redirectUrl}
          />
        </div>
      </div>
    </>
  );
}
