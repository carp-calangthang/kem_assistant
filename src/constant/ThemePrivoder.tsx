import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { blackColor, MidnightColor, whiteColor } from './colors';

interface Theme {
    backgroundColor: string;
    textColor: string;
}

interface ThemeContextType {
    theme: 'light' | 'dark';
    themeStyles: Theme;
}

const defaultTheme: ThemeContextType = {
    theme: 'light',
    themeStyles: {
        backgroundColor: '#fff',
        textColor: '#000',
    },
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const scheme = useColorScheme();
    const [theme, setTheme] = useState<'light' | 'dark'>(scheme || 'light');

    useEffect(() => {
        if (scheme) {
        setTheme(scheme);
        }
    }, [scheme]);

    const lightTheme: Theme = {
        backgroundColor: whiteColor,
        textColor: blackColor,
    };

    const darkTheme: Theme = {
        backgroundColor: '#000',
        textColor: '#fff',
    };

    const themeStyles = theme === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, themeStyles }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
