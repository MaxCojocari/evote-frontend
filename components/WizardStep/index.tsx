import classes from "./styles.module.css";
import circleActive from "../../public/CircleActive.svg";
import circleInactive from "../../public/CircleInactive.svg";
import bigCircle from "../../public/BigCircle.svg";
import bigCircleDone from "../../public/BigCircleDone.svg";
import Image from "next/image";
import { WizardStepStatus } from "../../types/types";

export default function WizardStep({ stepNr, status, name }: any) {
  return (
    <>
      {status === WizardStepStatus.ON_HOLD && (
        <div className={classes.main}>
          <div className={classes.line}>
            <div className={classes.lineEmpty}></div>
            <Image
              className={classes.circleInactive}
              src={circleInactive}
              alt={"circle"}
            />
            <div className={classes.stepInactive}>{stepNr}</div>
            <div className={classes.lineEmpty}></div>
          </div>

          <div className={classes.name}>
            <div className={classes.textInactive}>{name}</div>
          </div>
        </div>
      )}
      {status === WizardStepStatus.IN_PROGRESS && (
        <div className={classes.main}>
          <div className={classes.line}>
            <div className={classes.lineFilled}></div>
            <Image
              className={classes.circleActive}
              src={circleActive}
              alt={"circle"}
            />
            <div className={classes.stepActive}>{stepNr}</div>
            <div className={classes.lineEmpty}></div>
          </div>

          <div className={classes.name}>
            <div className={classes.textActive}>{name}</div>
          </div>
        </div>
      )}
      {status === WizardStepStatus.DONE && (
        <div className={classes.main}>
          <div className={classes.line}>
            <div className={classes.lineFilled}></div>
            <Image
              className={classes.circleActive}
              src={bigCircle}
              alt={"circle"}
            />
            <div className={classes.stepActive}>{stepNr}</div>
            <div className={classes.lineFilled}></div>
          </div>

          <div className={classes.name}>
            <div className={classes.textActive}>{name}</div>
          </div>
        </div>
      )}
      {status === WizardStepStatus.SUCCESS && (
        <div className={classes.main}>
          <div className={classes.line}>
            <div className={classes.lineDone}></div>
            <Image
              className={classes.circleDone}
              src={bigCircleDone}
              alt={"circle"}
            />
            <div className={classes.stepActive}>{stepNr}</div>
            <div className={classes.lineDone}></div>
          </div>

          <div className={classes.name}>
            <div className={classes.textActive}>{name}</div>
          </div>
        </div>
      )}
    </>
  );
}
