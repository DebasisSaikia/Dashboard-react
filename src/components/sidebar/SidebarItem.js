import React from 'react'
import styles from './sidebar.module.css'

const SidebarItem = ({Icon,title}) => {
    return (
         <div className={styles.sidebar_item}>
            <Icon className={styles.sidebar_icon} />
            <p className={styles.sidebar_title}>{title}</p>
        </div>
    )
}

export default SidebarItem
