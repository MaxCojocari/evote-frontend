"use client";
import classes from "./styles.module.css";
import { useState } from "react";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { generateOtp, verifyToken } from "../../../services/auth.service";
import { sendSms } from "../../../services/sms.service";

const tokenRegExp = /^[a-zA-Z0-9]{9}$/;

const validationSchema = yup
  .object()
  .shape({
    token: yup
      .string()
      .required("Câmp obligatoriu!")
      .matches(tokenRegExp, "Token-ul este incorect!"),
  })
  .required();

export default function LogInInput({ loginRedirectRelativeUrl }: any) {
  const [token, setToken] = useState("");
  const router = useRouter();
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;

  async function logInHandler(event: any) {
    const res = await verifyToken({ token_value: token });
    if (res?.status === 200) {
      const id = res?.data.user.id;
      localStorage.setItem("userId", id);
      const phone = res?.data.user.phone;
      const resOtp = await generateOtp({ id });
      const data = `Codul de autentificare: ${resOtp?.data["totp_code"]}`;

      const resSms = await sendSms({ to: phone, data });
      if (resSms && resSms?.status !== 200) return;
      setTimeout(() => {
        router.push(loginRedirectRelativeUrl);
      }, 1000);
    } else {
      setError("token", {
        type: "manual",
        message: "Token-ul este incorect!",
      });
    }
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
              onClick={handleSubmit(logInHandler)}
            >
              Verifică token-ul
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
