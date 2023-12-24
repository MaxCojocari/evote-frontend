import type { NextPage } from "next";
import styles from "./past-elections.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.metricGroup}>
          <div className={styles.metricItem}>
            <div className={styles.headingAndDropdown}>
              <div className={styles.heading}>
                Alegererile parlamentare 2019
              </div>
            </div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.headingAndDropdown}>
              <div className={styles.heading}>
                Alegererile parlamentare 2015
              </div>
            </div>
          </div>
          <div className={styles.metricItem}>
            <div className={styles.headingAndDropdown}>
              <div className={styles.heading}>
                Alegererile prezidențiale 2016
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
