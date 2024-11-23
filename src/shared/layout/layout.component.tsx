import React from 'react';
import styles from './layot.component.scss';
import { Header } from '../header/header.component';

export const Layout = () => {
    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.content}></div>
        </div>
    );
}