import React from 'react';
import styles from "./header.scss"
import { Account } from "./Account"
import { Logo } from './Logo';

export function Header () {
    return (
        <header className={styles.header}>
            <Logo />
            <Account />
        </header>
    )
}