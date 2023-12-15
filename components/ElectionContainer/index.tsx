import ElectionBox from "../ElectionBox";
import classes from "./styles.module.css";

export default function ElectionContainer({ elections }: any) {
  // getCurrentElections -> "Alegeri prezidențiale", "Alegeri municipale"...
  return (
    <div className={classes.main}>
      {elections.map(
        (object: { description: string; img: string }, index: any) => (
          <ElectionBox
            key={index}
            boxName={object.description}
            img={`/${object.img}`}
          />
        )
      )}
    </div>
  );
}
