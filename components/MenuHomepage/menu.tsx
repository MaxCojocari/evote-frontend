import type { NextPage } from "next";
import Link from 'next/link';
import styles from "./menu.module.css";

const Menu: NextPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.nav}>
        <div className={styles.arrowUpSvgrepoCom11}>
          <button className={styles.x}>X</button>
        </div>
        <div className={styles.logoWrap}>
          <div className={styles.logomark}>
            <img className={styles.contentIcon} alt="" src="/content.svg" />
          </div>
          <div className={styles.logotype}>
            <b className={styles.swiftvote}>SwiftVote</b>
          </div>
        </div>
        <div className={styles.header} />
      </div>
      <div className={styles.text}>
        <p className={styles.ntrNProfilul}>{`Întră în profilul `}</p>
        <p className={styles.ntrNProfilul}>tău ca să votezi!</p>
      </div>

    <Link href="/login" style={{ textDecoration: 'none' }}>
        <button className={styles.buttonBase}>
        <div className={styles.text1}>Logare</div>
        </button>
    </Link>

    </div>
  );
};

export default Menu;