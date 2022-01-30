import React, {useCallback} from 'react';
import ToggleSwitch from "../../components/ToggleSwitch";
import {useTheme} from "next-themes";

const DarkModeToggleSwitch = () => {
    const {theme, setTheme} = useTheme();

    const onChange = useCallback((toggle) => {
        setTheme(toggle ? 'dark' : 'light');
    }, []);

    return (
        <ToggleSwitch onChange={onChange}
                      defaultValue={theme === 'dark'}
        />
    );
};

export default DarkModeToggleSwitch;
