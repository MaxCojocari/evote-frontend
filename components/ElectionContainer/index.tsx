import { useEffect, useState } from "react";
import { Choice } from "../../types/types";
import ElectionBox from "../ElectionBox";
import classes from "./styles.module.css";
import { getVotingStatus } from "../../services/election.service";
import { useSession } from "next-auth/react";

export default function ElectionContainer({ elections }: any) {
  const [votedElectionIds, setVotedElectionIds] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    try {
      const id = (session?.user as any)?.id;
      getVotingStatus(id as string).then((res) => {
        const votedElectionIds = res?.data.map((item: any) => item.election_id);
        setVotedElectionIds(votedElectionIds);
      });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.main}>
      {elections?.map((election: Choice, index: any) => {
        if (!votedElectionIds.includes(election.id as never)) {
          return <ElectionBox key={index} choice={election} />;
        }
        return null;
      })}
    </div>
  );
}
