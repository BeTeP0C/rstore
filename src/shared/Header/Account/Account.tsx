import React from "react";
import styles from "./account.scss"
import style_res from "../../_reset.global.scss"

export function Account () {
    return (
        <div className={styles.header__account}>
            <button className={styles.header__button}>Выйти</button>    
        </div>
    )
}