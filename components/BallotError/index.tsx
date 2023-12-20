import { useRouter } from "next/navigation";
import classes from "./styles.module.css";

export default function BallotError({
  errorCode = 401,
  errorData = "Unauthorized",
}: any) {
  const router = useRouter();

  return (
    <div className={classes.main}>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontWeight: "900",
            color: "#D1D5DB",
            fontSize: "9rem",
          }}
        >
          {errorCode}
        </h1>
        <p
          style={{
            color: "#101828",
            textAlign: "center",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "37.626px",
            fontSize: "30px",
            marginTop: "1rem",
          }}
        >
          {errorData}
        </p>
        <p
          style={{
            textAlign: "center",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 350,
            lineHeight: "27.626px",
            fontSize: "28.835px",
            marginTop: "1rem",
            color: "#6B7280",
          }}
        >
          An error occured while loading this page
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            marginBottom: "60px",
          }}
        >
          <button
            className={classes.button}
            onClick={() => router.replace("/")}
          >
            <p>Dashboard</p>
          </button>
        </div>
      </div>
    </div>
  );
}
