'use client';

import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  toggleTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>('dark');

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: {
                  main: '#60a5fa',
                },
                secondary: {
                  main: '#a78bfa',
                },
                background: {
                  default: '#0a0a0a',
                  paper: '#111111',
                },
                text: {
                  primary: '#ffffff',
                  secondary: '#9ca3af',
                },
              }
            : {
                primary: {
                  main: '#3b82f6',
                },
                secondary: {
                  main: '#8b5cf6',
                },
                background: {
                  default: '#ffffff',
                  paper: '#f9fafb',
                },
                text: {
                  primary: '#111827',
                  secondary: '#6b7280',
                },
              }),
        },
        typography: {
          fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
          },
          h2: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.3,
          },
          h3: {
            fontSize: '2rem',
            fontWeight: 600,
            lineHeight: 1.4,
          },
          h4: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
          },
          body1: {
            fontSize: '1.125rem',
            lineHeight: 1.7,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                fontSize: '1rem',
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
