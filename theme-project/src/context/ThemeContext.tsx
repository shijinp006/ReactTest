import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

export type ThemeName = 'theme1' | 'theme2' | 'theme3';

export interface Theme {
  name: ThemeName;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    cardBackground: string;
    borderColor: string;
  };
  fonts: {
    body: string;
    heading: string;
    button: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  layout: {
    type: 'minimal' | 'sidebar' | 'grid';
  };
  button: {
    paddingY: string;
    paddingX: string;
    borderRadius: string;
  };
  card: {
    padding: string;
    borderRadius: string;
    boxShadow: string;
  };
}

export interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem('appTheme') as ThemeName;
    return storedTheme && ['theme1', 'theme2', 'theme3'].includes(storedTheme)
      ? storedTheme
      : 'theme1';
  });

  const themes: Record<ThemeName, Theme> = {
    theme1: {
      name: 'theme1', // Minimalist Light Theme
      colors: {
        primary: '#2b6cb0',
        secondary: '#edf2f7',
        background: '#ffffff',
        text: '#2d3748',
        cardBackground: '#f7fafc',
        borderColor: '#e2e8f0',
      },
      fonts: {
        body: 'Arial, sans-serif',
        heading: 'Helvetica, sans-serif',
        button: 'Verdana, sans-serif',
      },
      spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
      },
      layout: { type: 'minimal' },
      button: {
        paddingX: '1rem',
        paddingY: '0.5rem',
        borderRadius: '0.5rem',
      },
      card: {
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      },
    },

    theme2: {
      name: 'theme2', // Dark Mode with Sidebar Layout & Bold Serif Font
      colors: {
        primary: '#90cdf4',
        secondary: '#2d3748',
        background: '#1a202c',
        text: '#e2e8f0',
        cardBackground: '#2d3748',
        borderColor: '#4a5568',
      },
      fonts: {
        body: '"Merriweather", serif',
        heading: '"Merriweather", serif',
        button: '"Merriweather", serif',
      },
      spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
      },
      layout: { type: 'sidebar' },
      button: {
        paddingX: '1rem',
        paddingY: '0.5rem',
        borderRadius: '0.5rem',
      },
      card: {
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 1px 4px rgba(255,255,255,0.1)',
      },
    },

    theme3: {
      name: 'theme3', // Colorful Grid with Playful Google Font (Pacifico)
      colors: {
        primary: '#ff69b4',
        secondary: '#ffe4e1',
        background: '#fffaf0',
        text: '#4b0082',
        cardBackground: '#ffffff',
        borderColor: '#ffc0cb',
      },
      fonts: {
        body: '"Pacifico", cursive',
        heading: '"Pacifico", cursive',
        button: '"Pacifico", cursive',
      },
      spacing: {
        small: '0.5rem',
        medium: '1rem',
        large: '2rem',
      },
      layout: { type: 'grid' },
      button: {
        paddingX: '1.25rem',
        paddingY: '0.625rem',
        borderRadius: '0.75rem',
      },
      card: {
        padding: '1.25rem',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      },
    },
  };

  const currentTheme = themes[currentThemeName];

  useEffect(() => {
    const root = document.documentElement;
    ['theme-theme1', 'theme-theme2', 'theme-theme3'].forEach(cls =>
      root.classList.remove(cls)
    );
    root.classList.add(`theme-${currentThemeName}`);
  }, [currentThemeName]);

  const setTheme = (themeName: ThemeName) => {
    setCurrentThemeName(themeName);
    localStorage.setItem('appTheme', themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
