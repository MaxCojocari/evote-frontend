import Image from "next/image";
import BallotHeader from "../BallotHeader";
import Wizard from "../Wizard";
import classes from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function VotedSuccessfully({ ballotName, votingState }: any) {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <BallotHeader text={ballotName} />
      <Wizard votingState={votingState} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className={classes.successBlock}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <p className={classes.voted}>VOTAT!</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <Image
              className={classes.successImg}
              src={"/circle_voted.svg"}
              alt="img-success"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <p className={classes.info}>Votul tău a fost înregistrat</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            <button
              className={classes.button}
              onClick={() => router.replace("/")}
            >
              <p>Vezi statisticile</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
