import type { NextPage } from "next";
import Countdown from "../components/Countdown/countdown";
import Stats from "../components/Stats/stats";
import PieChart from "../components/PieChart/pie-chart";
import Candidates from "../components/Candidates/candidates";
import PastElections from "../components/PastElections/past-elections";
import styles from "./page.module.css";
import SidebarHome from "../components/SidebarHome";
import FooterVoting from "../components/FooterVoting";

const MainPageDesktop: NextPage = () => {
  return (
    <div className={styles.mainPageDesktop}>
      <SidebarHome />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "1260px",
        }}
      >
        <div className={styles.main}>
          <div className={styles.headerSection}>
            <Countdown />
            <div className={styles.container}>
              <div className={styles.pageHeader}>
                <div className={styles.content}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>
                      Alegerile prezidențiale 2024
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Stats />
            <div className={styles.container1}>
              <div className={styles.pageHeader}>
                <div className={styles.content}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Voturile</div>
                  </div>
                </div>
              </div>
            </div>
            <PieChart />
            <div className={styles.container1}>
              <div className={styles.pageHeader}>
                <div className={styles.content}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Candidați</div>
                  </div>
                </div>
              </div>
            </div>
            <Candidates />
            <div className={styles.container1}>
              <div className={styles.pageHeader}>
                <div className={styles.content}>
                  <div className={styles.textAndSupportingText}>
                    <div className={styles.text}>Vezi alegerile trecute!</div>
                  </div>
                </div>
              </div>
            </div>
            <PastElections />
          </div>
        </div>
        <FooterVoting />
      </div>
    </div>
  );
};

export default MainPageDesktop;
