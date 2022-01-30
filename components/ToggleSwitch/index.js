import React, {useCallback, useState} from "react";
import styles from './style.module.scss';
import cn from "classnames";

const ToggleSwitch = ({ onChange }) => {
    const [toggle, setToggle] = useState(false);

    const onToggleClick = useCallback(() => {
        setToggle(!toggle);

        if (onChange) {
            onChange(!toggle);
        }
    }, [toggle, onChange]);

    return (
        <div className={cn(styles.toggleSwitch, {
            [styles.on]: toggle
        })}
             onClick={onToggleClick}
        >
        </div>
    );
};

export default ToggleSwitch;
