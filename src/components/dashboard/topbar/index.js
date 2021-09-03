import React from "react";
import styles from "./topbar.module.css";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className="topbar_icons">
        <h1>Welcome to Dashboard</h1>
      </div>

      <div className="topbar_search">
        <h1>Search</h1>
      </div>
    </div>
  );
};

export default TopBar;
