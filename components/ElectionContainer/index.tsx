import ElectionBox from "../ElectionBox";
import classes from "./styles.module.css";
import img1 from "../../public/chisinau.jpeg";
import img2 from "../../public/balti.jpeg";

export default function ElectionContainer() {
  return (
    <div className={classes.main}>
      <ElectionBox electionName={"Alegeri prezidentiale"} img={img1} />
      <ElectionBox electionName={"Alegeri municipale"} img={img2} />
      {/* <ElectionBox electionName={"Alegeri prezidentiale"} img={img1} />
      <ElectionBox electionName={"Alegeri municipale"} img={img2} /> */}
    </div>
  );
}
