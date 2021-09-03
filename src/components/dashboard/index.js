import React from "react";
import styles from "./dashboard.module.css";
import TopBar from "./topbar";

const DashBoard = () => {
  return (
    <div className={styles.dashboard}>
      <TopBar />
    </div>
  );
};

export default DashBoard;
