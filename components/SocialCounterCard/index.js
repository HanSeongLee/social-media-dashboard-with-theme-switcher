import React from "react";
import styles from './style.module.scss';
import UpIcon from '/public/icons/icon-up.svg';
import cn from 'classnames';

const SocialCounterCard = ({
                               icon, username, count, indicator = 'followers',
                               todayCount, cardBarColor
                           }) => {
    return (
        <div className={styles.card}
             style={{
                 '--card-bar-color': cardBarColor,
             }}
        >
            <div className={styles.username}>
                {icon}
                {username}
            </div>
            <h2 className={styles.count}>
                {count}
            </h2>
            <p className={styles.indicator}>
                {indicator}
            </p>
            <div className={cn(styles.todayCount, {
                [styles.down]: todayCount < 0,
            })}>
                <UpIcon className={styles.upIcon}/>
                {todayCount > 0 ? todayCount : todayCount * -1} Today
            </div>
        </div>
    );
};

export default SocialCounterCard;
