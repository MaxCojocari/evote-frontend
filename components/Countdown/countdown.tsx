"use client";
import type { NextPage } from "next";
import styles from "./countdown.module.css";
import Countdown, { zeroPad } from "react-countdown";

const renderer = ({ hours, minutes, days }: any) => {
  return (
    <div className={styles.number}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div style={{ marginBottom: "40px" }}>{zeroPad(days)}</div>
          <div className={styles.indicatorCountdown}>zile</div>
        </div>
        <div> : </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div style={{ marginBottom: "40px" }}>{zeroPad(hours)}</div>
          <div className={styles.indicatorCountdown}>ore</div>
        </div>
        <div> : </div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ marginRight: "20px", marginLeft: "20px" }}>
          <div style={{ marginBottom: "40px" }}>{zeroPad(minutes)}</div>
          <div className={styles.indicatorCountdown}>minute</div>
        </div>
      </div>
    </div>
  );
};

const Container: NextPage = () => {
  return (
    <div className={styles.elementsBg}>
      <div className={styles.metricItem}>
        <div className={styles.headingAndDropdown}>
          <div className={styles.heading}>
            Până la Alegerile Parlamentare 2024 au rămas:
          </div>
        </div>
        <Countdown date={Date.now() + 1.901e9} renderer={renderer} />
      </div>
    </div>
  );
};

export default Container;
