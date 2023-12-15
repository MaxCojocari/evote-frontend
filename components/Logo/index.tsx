import classes from "./styles.module.css";
import grid from "../../public/Grid.svg";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Logo({ color }: any) {
  return (
    <div className={classes.logo}>
      <div className={classes.logoWrap}>
        <Image className={classes.logo_img} src={logo} alt="log-img" />
        <div
          style={{
            color: `${color}`,
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "24px",
            fontFamily: "Inter",
          }}
        >
          SwiftVote
        </div>
      </div>
    </div>
  );
}
