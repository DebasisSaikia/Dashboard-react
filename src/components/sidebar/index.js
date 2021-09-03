import React from "react";
import styles from "./sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { sidebarData, deviceData } from "./sidebarData";

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
      <div className={styles.active_device}>
        <h3>Active device</h3>
        {deviceData.map((device) => {
          return (
            <div className={styles.device_container}>
              <div className={styles.img_container}>
                <img
                  src={device.deviceIcon}
                  alt={device.name}
                  className={styles.device_image}
                  width="30"
                  height="30"
                />
              </div>

              <div className={styles.device_info}>
                <p className={styles.device_name}>{device.name}</p>
                <p className={styles.device_status}>{device.status}</p>
              </div>
              <HiOutlineDotsVertical className={styles.device_icon} />
            </div>
          );
        })}
      </div>

      <div className={styles.profile_image}>
        <img
          src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png"
          alt="profile_pic"
          width="40"
          height="40"
        />
      </div>
    </div>
  );
};

export default Sidebar;
