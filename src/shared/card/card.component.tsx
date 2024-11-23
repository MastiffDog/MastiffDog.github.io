import React, { FC } from 'react';
import styles from './card.component.scss';

interface CardProps {
    price: number;
    img_Url: string;
    name: string;
    cut_desc: string;
}

export const Card: FC<CardProps> = ({ price, img_Url, name, cut_desc, ...props }) => {
    return (
      <div className={styles.card}>
        <div className={styles.name}>
            <h2>{name}</h2>
        </div>
        <div className={styles.card_image}>
            <img src={img_Url} alt="No image"/>
        </div>
        <div className={styles.card_desc}>
            <p>{cut_desc}</p>
        </div>
        <div className={styles.card_price}>
            <h3>Стоимость: {price}</h3>
        </div>
        <div className={styles.add_container}>
            <button className={styles.add_button} disabled>Добавить в корзину</button>
        </div>
      </div>
    );
  };
  