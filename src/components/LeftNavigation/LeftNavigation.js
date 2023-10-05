import React from "react";

import styles from './LeftNavigation.module.css';

import {ServerListExample} from "../../assets/examples/ServerListExample";

export default function LeftNavigation() {
    return (
        <div className={styles.leftNavigation}>
            <div className={styles.listItem + " " + styles.privateMessages}>
                <div className={styles.listItemIcon + " " + styles.privateMessagesActive}>
                    <img src={"/images/discord-logo.png"} alt="Private Messages"/>
                    <div className={styles.listItemIconName}>Private Messages</div>
                </div>
            </div>
            <div className={styles.listItemSep}></div>
            <div className={styles.serversList}>
                {
                    ServerListExample.map((server, index) => {
                        return server.type === 'server' ? (
                            <div className={styles.listItem} key={index}>
                                <div className={styles.listItemIcon}>
                                    <img src={server?.avatar} alt={server?.name}/>
                                    <div className={styles.listItemIconName}>{server?.name}</div>
                                </div>
                            </div>
                        ) : (
                            <div className={styles.listItemGroup} key={index}>
                                <div className={styles.listItemGroupTitle}>
                                    <svg aria-hidden="true" role="img" width="24" height="24" viewBox="0 0 24 24" style={{color: 'rgb(88, 101, 242)'}}><path fill="currentColor" d="M20 7H12L10.553 5.106C10.214 4.428 9.521 4 8.764 4H3C2.447 4 2 4.447 2 5V19C2 20.104 2.895 21 4 21H20C21.104 21 22 20.104 22 19V9C22 7.896 21.104 7 20 7Z"></path></svg>
                                    <div className={styles.listItemGroupTitleName}>{server?.name}</div>
                                </div>
                                {server.childList.map((child, index) => {
                                    return (
                                        <div className={styles.listItem} key={index}>
                                            <div className={styles.listItemIcon}>
                                                <img src={child?.avatar} alt={child?.name}/>
                                                <div className={styles.listItemIconName}>{child?.name}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}