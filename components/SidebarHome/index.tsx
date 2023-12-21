"use client";
import Image from "next/image";
import Logo from "../Logo";
import classes from "./styles.module.css";
import avatar from "../../public/Avatar.png";
import logoutIcon from "../../public/logout-icon.svg";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { useCallback, useEffect, useState } from "react";
import { getElections, getVotingStatus } from "../../services/election.service";
import { Election } from "../../types/types";

function arraysEqual<T>(arr1: T[], arr2: T[]): boolean {
  if (arr1?.length !== arr2?.length) return false;

  if (arr1 && arr2) {
    const sortedArr1 = [...arr1].sort();
    const sortedArr2 = [...arr2].sort();

    for (let i = 0; i < sortedArr1?.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
        return false;
      }
    }
  }

  return true;
}

export default function SidebarHome() {
  const [isVoteButtonVisible, setIsVoteButtonVisible] = useState(true);
  const router = useRouter();
  const { status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  const areElectionsAvailableForVoting = useCallback(async () => {
    const resGet = await getElections();
    const allElectionIds = resGet?.data.map(
      (election: Election) => election.id
    );
    const id = localStorage.getItem("userId");
    const resElectionsVoted = await getVotingStatus(id as string);
    const electionsVotedIds = resElectionsVoted?.data.map(
      (item: any) => item.election_id
    );
    console.log(allElectionIds);
    console.log(electionsVotedIds);

    setIsVoteButtonVisible(arraysEqual(allElectionIds, electionsVotedIds));
  }, []);

  useEffect(() => {
    areElectionsAvailableForVoting();
  }, [areElectionsAvailableForVoting]);

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

        {!isVoteButtonVisible && (
          <div style={{ marginTop: "-20px" }}>
            <button
              className={classes.buttonVoteNow}
              onClick={() => router.replace("/voting")}
            >
              <p>Votează acum!</p>
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
