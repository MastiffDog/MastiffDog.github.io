import React from "react";
import styles from './modal.component.scss';

//TODO: move some params in props (like width, opacity etc...). Use Button component etc...
export const ModalWindow = () => {
    return  ( 
    <div className={styles.shading}>
        <div className={styles.main}>
            <div className={styles.content}></div>
            <div className={styles.buttongroup}>
                <div className={styles.close}>
                    <button className={styles.close_button}>Закрыть</button>
                </div>
            </div>
        </div>
    </div>
    );
}