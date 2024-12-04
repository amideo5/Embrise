import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'day' | 'night';

interface ThemeContextType {
  theme: Theme;
  isDaytime: boolean;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'day', isDaytime: true });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('day');
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const hours = new Date().getHours();
      const isDay = hours >= 6 && hours < 18;
      setTheme(isDay ? 'day' : 'night');
      setIsDaytime(isDay);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, isDaytime }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);