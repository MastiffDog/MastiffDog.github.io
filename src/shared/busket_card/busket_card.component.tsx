import React, { FC } from 'react';
import styles from './busket_card.component.scss';

interface BusketCardProps {
    name: string;
}

export const BusketCard: FC<BusketCardProps> = ({ name, ...props }) => {
    return (
      <div className={styles.main}>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.remove_container}>
            <button className={styles.remove_button}>Удалить товар</button>
        </div>
      </div>
    );
  };
  
