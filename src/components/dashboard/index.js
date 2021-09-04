import React from "react";
import BottomSection from "./bottomsection";
import styles from "./dashboard.module.css";
import OverView from "./overview";
import TopBar from "./topbar";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar />
      <OverView />
      <BottomSection />
    </div>
  );
};

export default DashBoard;
