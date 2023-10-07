import classes from "./styles.module.css";
import grid from "../../public/Grid.svg";
import dot from "../../public/Dot.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.logoWrap}>
        <div className={classes.logoMark}>
          <div className={classes.content}>
            <Image
              className={classes.grid}
              src={grid}
              //   width={0}
              //   height={0}
              //   sizes="100vw"
              alt="grid-img"
            />
            <Image
              className={classes.dot}
              src={dot}
              //   width={0}
              //   height={0}
              //   sizes="100vw"
              alt="dot-img"
            />
            <div
              style={{
                width: "32px",
                height: "15px",
                flexShrink: "0",
                borderRadius: "0px 0px 8px 8px",
                background: "rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(2.5px)",
                position: "absolute",
                top: "15.8px",
                left: "-1.1px",
              }}
            ></div>
          </div>
        </div>
        <div className={classes.logoText}>SwiftVote</div>
      </div>
    </div>
  );
}
