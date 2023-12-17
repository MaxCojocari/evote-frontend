"use client";
import Image from "next/image";
import Logo from "../Logo";
import classes from "./styles.module.css";
import avatar from "../../public/Avatar.png";
import logoutIcon from "../../public/logout-icon.svg";
import { useRouter } from "next/navigation";

export default function SidebarHome() {
  const router = useRouter();

  return (
    <div className={classes.content}>
      <div>
        <div style={{ marginBottom: "32px" }}>
          <Logo color={"#FFF"} />
        </div>
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
            Alegerile Prezidențiale 2024!
          </p>
        </div>
        <div style={{ marginTop: "-20px" }}>
          <button className={classes.buttonVoteNow}>
            <p>Votează acum!</p>
          </button>
        </div>
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
          onClick={() => router.replace("/")}
        />
      </div>
    </div>
  );
}
