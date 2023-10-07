import classes from "./styles.module.css";
import SupportText from "../SupportText";
import ValidateCode from "../ValidateCode";
import RowText from "../RowText";

export default function ReceiveTokenForm({
  supportText,
  buttonName,
  baseText,
  hrefText,
  redirectUrl,
  buttonRedirectRelativeUrl,
  isReceiveToken,
}: any) {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.receiveTokenContent}>
          <SupportText content={supportText} />
          <ValidateCode
            buttonName={buttonName}
            buttonRedirectRelativeUrl={buttonRedirectRelativeUrl}
            isReceiveToken={isReceiveToken}
          />
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
