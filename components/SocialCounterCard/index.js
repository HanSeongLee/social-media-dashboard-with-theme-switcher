import React from "react";
import styles from './style.module.scss';
import UpDownIndicator from "../UpDownIndicator";

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
            <UpDownIndicator count={todayCount}
                             unit={' Today'}
            />
        </div>
    );
};

export default SocialCounterCard;
