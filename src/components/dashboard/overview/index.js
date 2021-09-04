import React from "react";
import styles from "./overview.module.css";
import { currencyData, companyData } from "./overviewData";

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
                key={item.id}
                style={{ background: item.backGround }}
                className={styles.currency_container}
              >
                <p>{item.currencyName}</p>
                <h3>
                  ${item.value} <span>{item.icon}</span>
                </h3>
              </div>
            );
          })}
        </div>
        <div className={styles.overview_company}>
          {companyData.map((company) => {
            return (
              <div className={styles.company_info} key={company.id}>
                <div className={styles.left_info}>
                  <img src={company.logo} alt={company.id} />
                  <div className={styles.name_wrapper}>
                    <h5>{company.name}</h5>
                    <p>{company.category}</p>
                  </div>
                </div>

                <div className={styles.right_info}>
                  <h5>{company.value}</h5>
                  <p>{company.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OverView;
