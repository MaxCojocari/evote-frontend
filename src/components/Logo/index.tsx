import classes from "./styles.module.css";
import dot from "../../assets/Dot.svg";
import grid from "../../assets/Grid.svg";

export default function Logo() {
  return (
    <div className={classes.logo}>
      <div className={classes.logoWrap}>
        <div className={classes.logoMark}>
          <div className={classes.content}>
            <img className={classes.grid} src={grid} alt="grid-img" />
            <img className={classes.dot} src={dot} alt="dot-img" />
            <div
              style={{
                width: "32px",
                height: "16px",
                flexShrink: "0",
                borderRadius: "0px 0px 8px 8px",
                background: "rgba(255, 255, 255, 0.20)",
                backdropFilter: "blur(2.5px)",
                position: "absolute",
                top: "16px",
              }}
            ></div>
          </div>
        </div>
        <div className={classes.logoText}>SwiftVote</div>
      </div>
    </div>
  );
}
