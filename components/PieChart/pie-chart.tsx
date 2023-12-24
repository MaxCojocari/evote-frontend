import type { NextPage } from "next";
import styles from "./pie-chart.module.css";

const PieChart: NextPage = () => {
  return (
    <div className={styles.elementsBg}>
      <div className={styles.elementsBg1}>
        <div className={styles.color} />
        <div className={styles.groupParent}>
          <img className={styles.groupChild} alt="" src="/group-16.svg" />
          <div className={styles.elementsInfo}>
            <img className={styles.colorIcon} alt="" src="/color.svg" />
            <div className={styles.text}>Jei Chibuzo</div>
          </div>
          <div className={styles.elementsInfo1}>
            <img className={styles.colorIcon} alt="" src="/color1.svg" />
            <div className={styles.text}>Kim Wong</div>
          </div>
          <div className={styles.elementsInfo2}>
            <img className={styles.colorIcon} alt="" src="/color2.svg" />
            <div className={styles.text}>Wen Yah</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
