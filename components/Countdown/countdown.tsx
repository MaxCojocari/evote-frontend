"use client";
import type { NextPage } from "next";
import styles from "./countdown.module.css";

const Container: NextPage = () => {
  return (
    <div className={styles.elementsBg}>
      <div className={styles.metricItem}>
        <div className={styles.headingAndDropdown}>
          <div className={styles.heading}>
            Până la Alegerile Parlamentare 2023 au rămas:
          </div>
        </div>
        <div className={styles.number}>21 : 34 : 56</div>
        <div className={styles.numberAndBadge}>
          <div className={styles.number1}>zile</div>
          <div className={styles.number1}>ore</div>
          <div className={styles.number1}>minute</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
