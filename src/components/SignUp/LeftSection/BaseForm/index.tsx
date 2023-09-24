import eyeOff from "../../../../assets/eye-off.svg";
import eyeShow from "../../../../assets/eye-show.svg";
import classes from "./styles.module.css";
import { useState } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /^0\d{8}$/;
const idnpRegExp = /^\d{13}$/;

const validationSchema = yup
  .object()
  .shape({
    name: yup.string().required("Câmp obligatoriu!").max(50),
    surname: yup.string().required("Câmp obligatoriu!").max(50),
    idnp: yup
      .string()
      .required("Câmp obligatoriu!")
      .matches(idnpRegExp, "IDNP-ul este incorect!"),
    phoneNr: yup
      .string()
      .required("Câmp obligatoriu!")
      .matches(phoneRegExp, "Nr. de telefon incorect!"),
  })
  .required();

export default function BaseForm() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idnp, setIdnp] = useState("");
  const [phoneNr, setPhoneNr] = useState("");
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function signUpHandler(event: any) {
    // event.preventDefault();
    console.log({
      name,
      surname,
      idnp,
      phoneNr,
    });
  }

  return (
    <div className={classes.formContent}>
      <FormProvider {...methods}>
        <form className={classes.form}>
          <div className={classes.inputArea}>
            <div className={classes.inputWithLabel}>
              <p>Nume*</p>
              <input
                {...register("name")}
                placeholder="Introdu numele"
                onChange={(e) => setName(e.target.value)}
              />
              {errors?.name?.message && (
                <p className={classes.error}>{errors?.name?.message}</p>
              )}

              <p>Prenume*</p>
              <input
                {...register("surname")}
                placeholder="Introdu prenumele"
                onChange={(e) => setSurname(e.target.value)}
              />
              {errors?.surname?.message && (
                <p className={classes.error}>{errors?.surname?.message}</p>
              )}

              <p>IDNP*</p>
              <div className={classes.passwordPlaceholder}>
                <input
                  {...register("idnp")}
                  placeholder="Introdu IDNP-ul"
                  type={passwordShow ? "text" : "password"}
                  onChange={(e) => setIdnp(e.target.value)}
                />
                <img
                  className={classes.eye}
                  src={passwordShow ? eyeShow : eyeOff}
                  alt="eye-off"
                  onClick={() => setPasswordShow(!passwordShow)}
                />
              </div>
              {errors?.idnp?.message && (
                <p className={classes.error}>{errors?.idnp?.message}</p>
              )}

              <p>Nr. de telefon*</p>
              <input
                {...register("phoneNr")}
                placeholder="Introdu nr. de telefon"
                onChange={(e) => setPhoneNr(e.target.value)}
              />
              {errors?.phoneNr?.message && (
                <p className={classes.error}>{errors?.phoneNr?.message}</p>
              )}
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
            <button
              className={classes.signUpButton}
              onClick={handleSubmit(signUpHandler)}
            >
              Înregistrează-te
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
