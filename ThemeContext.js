import { createContext } from 'react';

export const themes = {
    light: {
        color: 'gray',
    },
    dark: {
        color: 'black',
    },
};

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
