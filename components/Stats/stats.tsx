import type { NextPage } from "next";
import MetricItemContainer from "./metric-item-container";
import styles from "./stats.module.css";

const FormContainer: NextPage = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.metricGroup}>
          <MetricItemContainer
            registeredVotersCount="Nr. total de alegători înregistrați"
            votersCount="2,127,088"
            electionDataLabel="/arrowup.svg"
            votingPercentage="8%"
            imageDimensions="/-chart.svg"
            propWidth="184px"
            propColor="#037a48"
            propWidth1="132px"
            propFlexShrink="0"
            propWidth2="130px"
          />
          <MetricItemContainer
            registeredVotersCount="Nr. de alegători care au votat"
            votersCount="1,403,009"
            electionDataLabel="/arrowdown.svg"
            votingPercentage="10%"
            imageDimensions="/-chart1.svg"
            propWidth="188px"
            propAlignSelf="unset"
            propColor="#b42318"
            propWidth1="unset"
            propFlexShrink="unset"
            propFlex="1"
            propWidth2="116px"
          />
          <MetricItemContainer
            registeredVotersCount="Nr. de voturi online"
            votersCount="30,916"
            electionDataLabel="/arrowup.svg"
            votingPercentage="20%"
            imageDimensions="/-chart.svg"
            propWidth="unset"
            propAlignSelf="stretch"
            propColor="#037a48"
            propWidth1="unset"
            propFlexShrink="unset"
            propFlex="1"
            propWidth2="130px"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
