"use client";
import FooterVoting from "../components/FooterVoting";
import SidebarHome from "../components/SidebarHome";
import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes.main}>
      <SidebarHome />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <FooterVoting />
      </div>
    </div>
  );
}
