import classes from "./styles.module.css";

export default function RowText({ baseText, hrefText, redirectUrl }: any) {
  return (
    <div className={classes.row}>
      <p>
        {baseText}{" "}
        <a href={redirectUrl} style={{ textDecoration: "none" }}>
          <span
            style={{
              color: "var(--primary-700, #6941C6)",
              /* Text sm/Semibold */
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "20px" /* 142.857% */,
              cursor: "pointer",
            }}
          >
            {hrefText}
          </span>
        </a>
      </p>
    </div>
  );
}
