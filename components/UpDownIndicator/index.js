import React from 'react';
import styles from './style.module.scss';
import UpIcon from '/public/icons/icon-up.svg';
import cn from "classnames";

const UpDownIndicator = ({ count, unit }) => {
    return (
        <div className={cn(styles.indicator, {
            [styles.down]: count < 0,
        })}>
            <UpIcon className={styles.upIcon} />
            {count > 0 ? count : count * -1}{unit}
        </div>
    );
};

export default UpDownIndicator;
