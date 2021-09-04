import React from "react";
import { SiBitcoin } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { IoLogoBitcoin } from "react-icons/io";
import styles from "./overview.module.css";
import { currencyData, companyData } from "./overviewData";

const OverView = () => {
  return (
    <div className={styles.overview}>
      <h1>Overview</h1>
      <div className={styles.overview_container}>
        <div className={styles.overview_banner}>
          <div className={styles.banner}>
            <div className={styles.banner_one}>
              <p>Available balance in USD</p>
              <h3>134,510.15</h3>
              <div className={styles.transaction_info}>
                <p>
                  Transactions <span>Wallet</span>
                </p>
                <h4>
                  34,405 <span>23</span>
                </h4>
              </div>
              <p>Last activity at 21 May,2021</p>
            </div>
            <div className={styles.banner_two}>
              <IoLogoBitcoin />
            </div>
          </div>
          <div className={styles.wallet}>
            <div className={styles.wallet_one}>
              <p>NioWallet</p>
              <h5>
                4.434953 <span>NIO</span>
              </h5>
              <SiBitcoin />
            </div>
            <div className={styles.wallet_two}>
              <p>Ethereum Wallet</p>
              <h5>
                0.000298 <span>ETH</span>
              </h5>
              <FaEthereum />
            </div>
          </div>
        </div>
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
                  <h5 style={{ color: company?.primary }}>{company.value}</h5>
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
