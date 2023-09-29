import SignUpInput from "../SignUpInput";
import classes from "./styles.module.css";

export default function SignUpForm() {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.supportText}>
          <p>Înregistrare</p>
        </div>

        <SignUpInput />

        <div className={classes.row}>
          <p>
            Deja ai token-ul personal?{" "}
            <a href="https://utm.md/en/" style={{ textDecoration: "none" }}>
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
                Logează-te
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
