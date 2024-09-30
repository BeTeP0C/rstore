import React from "react";
import styles from "./logo.scss"
import logo from "./header_logo.svg?url"

export function Logo () {
    return (
        <a href="#">
            <img className={styles.header__logo} src={logo} alt="Логотип" />
        </a>
    )
}