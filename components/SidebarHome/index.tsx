"use client";
import Image from "next/image";
import Logo from "../Logo";
import classes from "./styles.module.css";
import avatar from "../../public/Avatar.png";
import logoutIcon from "../../public/logout-icon.svg";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { areElectionsAvailableForVoting } from "../../services/election.service";

export default function SidebarHome() {
  const [isVoteButtonVisible, setIsVoteButtonVisible] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ redirect: false });
    router.replace("/");
  };

  const isVoteNowButtonAvailable = useCallback(async () => {
    const id = (session?.user as any).id;
    const res = await areElectionsAvailableForVoting(id as string);
    setIsVoteButtonVisible(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    isVoteNowButtonAvailable();
  }, [isVoteNowButtonAvailable]);

  return (
    <div className={classes.content}>
      <div>
        <div style={{ marginBottom: "32px" }}>
          <Logo color={"#FFF"} />
        </div>

        {status === "unauthenticated" && (
          <>
            <div className={classes.text}>
              <p
                style={{
                  color: "#FFF",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "30.5px",
                }}
              >
                Intră în profilul <br />
                tău ca să votezi!
              </p>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button
                className={classes.buttonLogin}
                onClick={() => router.push("/login")}
              >
                <p className={classes.buttonText}>Logare</p>
              </button>
            </div>
          </>
        )}
        {status === "authenticated" && (
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
        )}
        {!isVoteButtonVisible && status === "authenticated" && (
          <div style={{ marginTop: "20px" }}>
            <button
              className={classes.buttonVoteNow}
              onClick={() => router.push("/voting")}
            >
              <p className={classes.buttonText}>Votează acum!</p>
            </button>
          </div>
        )}
      </div>

      {status === "authenticated" && (
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
            onClick={() => handleSignOut()}
          />
        </div>
      )}
    </div>
  );
}
