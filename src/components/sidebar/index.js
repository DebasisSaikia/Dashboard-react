import React from "react";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {sidebarData.map((data) => {
        return (
          <div key={data.id} className={styles.items_container}>
            <SidebarItem Icon={data.icon} title={data.title} />
          </div>
        );
      })}

      <div className="active_device">
        <h3>Active device</h3>
      </div>
    </div>
  );
};

export default Sidebar;
