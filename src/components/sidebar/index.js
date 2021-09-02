import React from 'react'
import styles from './sidebar.module.css'
import {IoHomeSharp} from 'react-icons/io';
import {FaWallet} from 'react-icons/fa';
import {BiShuffle} from 'react-icons/bi';
import {FaGlobe} from 'react-icons/fa';
import {IoStorefrontSharp} from 'react-icons/io';
import {AiFillCreditCard} from 'react-icons/ai'

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
           <h1> Sidebar</h1>
           <h1> Wallet</h1>
           <h1> Statistics</h1>
           <h1> Transactions</h1>
           <h1> Exchange</h1>
           <h1> News</h1>
        </div>
    )
}

export default Sidebar
