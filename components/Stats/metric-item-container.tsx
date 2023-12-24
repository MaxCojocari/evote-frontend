import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./metric-item-container.module.css";

type MetricItemContainerType = {
  registeredVotersCount?: string;
  votersCount?: string;
  electionDataLabel?: string;
  votingPercentage?: string;
  imageDimensions?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
  propWidth1?: CSSProperties["width"];
  propFlexShrink?: CSSProperties["flexShrink"];
  propFlex?: CSSProperties["flex"];
  propWidth2?: CSSProperties["width"];
};

const MetricItemContainer: NextPage<MetricItemContainerType> = ({
  registeredVotersCount,
  votersCount,
  electionDataLabel,
  votingPercentage,
  imageDimensions,
  propWidth,
  propAlignSelf,
  propColor,
  propWidth1,
  propFlexShrink,
  propFlex,
  propWidth2,
}) => {
  const numberStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const changeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flexShrink: propFlexShrink,
      flex: propFlex,
    };
  }, [propWidth1, propFlexShrink, propFlex]);

  const chartIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div className={styles.metricItem}>
      <div className={styles.headingAndDropdown}>
        <div className={styles.heading}>{registeredVotersCount}</div>
      </div>
      <div className={styles.numberAndChart}>
        <div className={styles.numberAndBadge}>
          <div className={styles.number} style={numberStyle}>
            {votersCount}
          </div>
          <div className={styles.changeAndText}>
            <div className={styles.change}>
              <img
                className={styles.arrowUpIcon}
                alt=""
                src={electionDataLabel}
              />
              <div className={styles.change1} style={changeStyle}>
                {votingPercentage}
              </div>
            </div>
            <div className={styles.text} style={textStyle}>
              decât în 2022
            </div>
          </div>
        </div>
        <img
          className={styles.chartIcon}
          alt=""
          src={imageDimensions}
          style={chartIconStyle}
        />
      </div>
    </div>
  );
};

export default MetricItemContainer;
