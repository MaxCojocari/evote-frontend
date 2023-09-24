import eyeOff from "../../../../assets/eye-off.svg";
import eyeShow from "../../../../assets/eye-show.svg";
import classes from "./styles.module.css";
import { useState } from "react";

export default function BaseForm() {
  const [passwordShow, setPasswordShow] = useState(false);

  console.log(passwordShow);

  function showPasswordHandler() {
    setPasswordShow(!passwordShow);
  }

  return (
    <div className={classes.formContent}>
      <div className={classes.form}>
        <div className={classes.inputArea}>
          <div className={classes.inputWithLabel}>
            <p>Nume*</p>
            <input placeholder="Introdu numele"></input>
            <p>Prenume*</p>
            <input placeholder="Introdu prenumele"></input>
            <p>IDNP*</p>

            <div className={classes.passwordPlaceholder}>
              <input
                placeholder="Introdu IDNP-ul"
                type={passwordShow ? "text" : "password"}
              />
              <img
                className={classes.eye}
                src={passwordShow ? eyeShow : eyeOff}
                alt="eye-off"
                onClick={showPasswordHandler}
              />
            </div>

            <p>Nr. de telefon*</p>
            <input placeholder="Introdu nr. de telefon"></input>
          </div>
        </div>

        <div className={classes.agreements}>
          <input className={classes.checkbox} type="checkbox" />
          <div className={classes.agreeText}>
            Sunt de acord cu
            <a href="https://utm.md/en/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  color: "#6941C6",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "20px",
                  marginLeft: "3px",
                  cursor: "pointer",
                }}
              >
                Termenii și condițiile
              </span>
            </a>
          </div>
        </div>

        <div className={classes.actions}>
          <button className={classes.signUpButton}>Înregistrează-te</button>
        </div>
      </div>
    </div>
  );
}
