import classes from "./styles.module.css";
import { useState } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const tokenRegExp = /^[a-zA-Z0-9]{12}$/;

const validationSchema = yup
  .object()
  .shape({
    token: yup
      .string()
      .required("Câmp obligatoriu!")
      .matches(tokenRegExp, "Token-ul este incorect!"),
  })
  .required();

export default function LogInInput() {
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  function signUpHandler(event: any) {
    console.log("Token: ", token);
    setTimeout(() => {
      navigate(`/login/receive-token`);
    }, 1000);
  }

  return (
    <div className={classes.formContent}>
      <FormProvider {...methods}>
        <form className={classes.form}>
          <div className={classes.inputArea}>
            <div className={classes.inputWithLabel}>
              <p>Token*</p>
              <input
                {...register("token")}
                placeholder="Introdu token-ul tău personal"
                onChange={(e) => setToken(e.target.value)}
              />
              {errors?.token?.message && (
                <p className={classes.error}>{errors?.token?.message}</p>
              )}
            </div>
          </div>

          <div className={classes.actions}>
            <button
              className={classes.logInButton}
              onClick={handleSubmit(signUpHandler)}
            >
              Verifică token-ul
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
