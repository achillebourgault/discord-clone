import React from "react";

import styles from './LeftNavigationExtended.module.css';

export default function LeftNavigationExtended() {
    return (
        <div className={styles.leftNavigationExtended}>
            <div className={styles.header}>
                <div>
                    <div className={styles.searchBar}>
                        <input type="text" placeholder="Rechercher/lancer une conversa..."/>
                    </div>
                </div>
            </div>
        </div>
    )
}