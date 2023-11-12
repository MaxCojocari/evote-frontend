import Image from "next/image";
import Logo from "../Logo";
import classes from "./styles.module.css";
import avatar from "../../public/Avatar.png";
import logoutIcon from "../../public/logout-icon.svg";

export default function Sidebar() {
  return (
    <div className={classes.content}>
      <div className={classes.nav}>
        <Logo color={"#FFF"} />
        <div className={classes.nav_header}></div>
        <div className={classes.text}>
          <p
            style={{
              color: "#FFF",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30.5px",
            }}
          >
            Acum au loc
          </p>
          <p
            style={{
              color: "#FF3A29",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "30.5px",
            }}
          >
            Alegerile Prezidențiale 2023!
          </p>
        </div>
        <div className={classes.frame9}>
          <Image className={classes.avatar} src={avatar} alt={"avatar-img"} />
          <div className={classes.textBox}>
            <p className={classes.name}>Olivia Rhye</p>
            <p className={classes.email}>olivia@untitledui.com</p>
          </div>
          <Image
            className={classes.logoutIcon}
            src={logoutIcon}
            alt={"logout-icon"}
          />
        </div>
      </div>
    </div>
  );
}
