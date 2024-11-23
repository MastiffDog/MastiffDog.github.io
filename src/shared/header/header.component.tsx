import React from 'react';
import styles from './header.component.scss';
import { Logo } from '../logo/logo.component';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Logo/>
            </div>
        </div>
    );
}