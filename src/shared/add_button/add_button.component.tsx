import React, { FC } from 'react';
import styles from './add_button.component.scss';

interface AddButtonProps {
    sum: number;
}
/**
 * Primary UI component for user interaction
 */

export const AddButton: FC<AddButtonProps> = ({ sum, ...props }) => {
  if(!sum) {
    return <button>В корзину</button>
  } 
  else {
    return (
        <div className={styles.container}>
            <div>
                <button className={styles.btn}>+</button>    
            </div>
            <div className={styles.sum}>
                <span>{sum}</span>
            </div>
            <div>
                <button className={styles.btn}>-</button>    
            </div>
        </div>
    );
  }
};
