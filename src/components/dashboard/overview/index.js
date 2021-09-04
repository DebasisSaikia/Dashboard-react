import React from "react";
import styles from "./overview.module.css";
import { currencyData } from "./overviewData";

const OverView = () => {
  return (
    <div className={styles.overview}>
      <h1>Overview</h1>
      <div className={styles.overview_container}>
        <div className={styles.overview_banner}>div1</div>
        <div className={styles.overview_currency}>
          {currencyData.map((item) => {
            return (
              <div
                style={{ background: item.backGround }}
                className={styles.currency_container}
              >
                <p>{item.currencyName}</p>
                <h3>
                  ${item.value} <span>{item.icon}</span>{" "}
                </h3>
              </div>
            );
          })}
        </div>
        <div className={styles.overview_company}>div3</div>
      </div>
    </div>
  );
};

export default OverView;
