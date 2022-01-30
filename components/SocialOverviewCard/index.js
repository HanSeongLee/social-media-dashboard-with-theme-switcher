import React from 'react';
import styles from './style.module.scss';
import UpDownIndicator from "../UpDownIndicator";

const SocialOverviewCard = ({ unit, icon, count, change }) => {
    return (
        <div className={styles.card}>
            <div className={styles.indicatorContainer}>
                <div className={styles.unit}>
                    {unit}
                </div>
                {icon}
            </div>
            <div className={styles.counterContainer}>
                <h2 className={styles.count}>
                    {count}
                </h2>
                <UpDownIndicator count={change}
                                 unit={'%'}
                />
            </div>
        </div>
    );
};

export default SocialOverviewCard;
