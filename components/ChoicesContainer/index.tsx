import Link from "next/link";
import ChoiceBox from "../ChoiceBox";
import classes from "./styles.module.css";

export default function ChoicesContainer({ choices }: any) {
  const handleVoteClick = () => {};

  return (
    <>
      <div className={classes.main}>
        {choices.map(
          (object: { description: string; img: string }, index: any) => (
            <ChoiceBox
              key={index}
              boxName={object.description}
              img={`/${object.img}`}
            />
          )
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          href={{
            pathname: "/voting/confirm",
            query: {
              election_id: "ab0ded4b-9151-46b1-85a4-0317ca2b407f",
              candidate_id: "2",
            },
          }}
          style={{
            textDecoration: "none",
          }}
        >
          <button className={classes.voteButton}>
            <div className={classes.buttonText}>Votează</div>
          </button>
        </Link>
      </div>
    </>
  );
}
