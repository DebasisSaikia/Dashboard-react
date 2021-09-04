import React from "react";
import styles from "./dashboard.module.css";
import OverView from "./overview";
import TopBar from "./topbar";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar />
      <OverView />
    </div>
  );
};

export default DashBoard;
