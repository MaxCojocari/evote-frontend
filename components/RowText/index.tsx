import Link from "next/link";
import classes from "./styles.module.css";

export default function RowText({ baseText, hrefText, redirectUrl }: any) {
  return (
    <div className={classes.row}>
      <p>
        {baseText}{" "}
        <Link
          href={redirectUrl}
          style={{
            textDecoration: "none",
          }}
        >
          <span
            style={{
              textDecoration: "none",
              color: "var(--primary-700, #6941C6)",
              fontFamily: "Inter",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "600",
              lineHeight: "20px",
              cursor: "pointer",
            }}
          >
            {hrefText}
          </span>
        </Link>
      </p>
    </div>
  );
}
