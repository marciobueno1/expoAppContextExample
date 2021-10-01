import React, { useContext } from 'react';
import { Button } from 'react-native';

import { ThemeContext } from '../ThemeContext.js';

export function ThemedButton({ title, onPress }) {
    const appTheme = useContext(ThemeContext);
    return (
        <Button
            title={title}
            color={appTheme.theme.color}
            onPress={onPress || appTheme.toggleTheme}
        />
    );
}