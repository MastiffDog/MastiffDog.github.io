import doggy from './doggy.svg';
import React from 'react';
import styles from './logo.component.scss';

export const Logo = () => {
    return (
        <div className={styles.main}>
           <img src={doggy} alt='doggy'/>     
        </div>
    );
}