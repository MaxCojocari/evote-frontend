// "use client";
// import FooterVoting from "../components/FooterVoting";
// import SidebarHome from "../components/SidebarHome";
// import classes from "./page.module.css";

// export default function Home() {
//   return (
//     <div className={classes.main}>
//       <SidebarHome />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//         }}
//       >
//         <FooterVoting />
//       </div>
//     </div>
//   );
// }

import type { NextPage } from "next";
import Menu from "../components/MenuHomepage/menu";
import Countdown from "../components/Countdown/countdown";
import Stats from "../components/Stats/stats";
import PieChart from "../components/PieChart/pie-chart";
import Candidates from "../components/Candidates/candidates";
import PastElections from "../components/PastElections/past-elections";
import Footer from "../components/Footer";
import styles from "./page.module.css";

const MainPageNelogatDesktop: NextPage = () => {
  return (
    <div className={styles.mainPageNelogatDesktop}>
      <div className={styles.sidebarNavigation}>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        <Menu />
      </div>
      <div className={styles.main}>
        <div className={styles.headerSection}>
          <Countdown />
          <div className={styles.container}>
            <div className={styles.pageHeader}>
              <div className={styles.content}>
                <div className={styles.textAndSupportingText}>
                  <div className={styles.text}>
                    Alegerile prezidențiale 2023
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
          <Footer />
        </div>
        <div className={styles.section} />
      </div>
    </div>
  );
};

export default MainPageNelogatDesktop;