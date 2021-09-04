import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./topbar.module.css";
import { topbarIcons } from "./topbarIcons";

const TopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar_container}>
        <h1>Welcome to Dashboard</h1>
        <div className={styles.top_icons}>
          {topbarIcons.map((item) => {
            return (
              <div key={item.id} className={styles.icon_div}>
                {item.icon}
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <h1>Search</h1>
        <div className={styles.search_container}>
          <input type="text" name="Search" placeholder="Enter Search Term" />
          <div className={styles.search_icon}>
            <FiSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
