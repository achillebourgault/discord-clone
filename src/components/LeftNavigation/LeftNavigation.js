import React from "react";

import styles from './LeftNavigation.module.css';

export default function LeftNavigation() {
    return (
        <div className={styles.leftNavigation}>
            <div className={styles.listItem + " " + styles.privateMessages}>
                <div className={styles.listItemIcon + " " + styles.privateMessagesActive}>
                    <img src="../../assets/images/icons/discord-logo.png"/>
                    <div className={styles.listItemIconName}>Private Messages</div>
                </div>
            </div>
            <div className={styles.listItemSep}></div>
        </div>
    )
}