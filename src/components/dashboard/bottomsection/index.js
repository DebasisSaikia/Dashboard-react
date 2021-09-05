import React from "react";
import styles from "./bottom.module.css";
import { miningData } from "./bottomSectionData";

const BottomSection = () => {
  // reusable custom checkbox
  const customCheckbox = () => {
    return (
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider} id={styles.round} />
      </label>
    );
  };

  return (
    <div className={styles.bottom_section}>
      <div className={styles.security_container}>
        <h3>Security</h3>
        <div className={styles.security_layout}>
          <div className={styles.security_card}>
            <div>
              <h5>Identity</h5>
              <p>Disable</p>
            </div>
            {customCheckbox()}
          </div>
          <div className={styles.security_card}>
            <div>
              <h5>Phone</h5>
              <p>Enable</p>
            </div>
            {customCheckbox()}
          </div>
          <div className={styles.security_card}>
            <div>
              <h5>Identity</h5>
              <p>Disable</p>
            </div>
            {customCheckbox()}
          </div>
          <div className={styles.security_card}>
            <div>
              <h5>Phone</h5>
              <p>Enable</p>
            </div>
            {customCheckbox()}
          </div>
        </div>
      </div>
      <div className={styles.mining_container}>
        <h3>Mining Status</h3>
        <div className={styles.mining_layout}>
          {miningData.map((data) => {
            return (
              <div className={styles.mining_card} key={data.id}>
                <div
                  className={styles.mining_logo}
                  style={{ background: data.backGround }}
                >
                  {data.icon}
                </div>
                <div>
                  <h5>{data.miningName}</h5>
                  <p style={{ color: data?.isRunning }}>{data.status}</p>
                </div>
                {data?.isCheckbox && customCheckbox()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
