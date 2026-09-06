import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Language, Theme } from '@/types';

interface AppContextValue {
  theme: Theme;
    language: Language;
      toggleTheme: () => void;
        toggleLanguage: () => void;
        }

        const AppContext = createContext<AppContextValue | undefined>(undefined);

        function getInitialTheme(): Theme {
          if (typeof window === 'undefined') return 'light';
            const stored = localStorage.getItem('theme');
              if (stored === 'light' || stored === 'dark') return stored;
                return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }

                function getInitialLanguage(): Language {
                  if (typeof window === 'undefined') return 'ar';
                    const stored = localStorage.getItem('language');
                      return stored === 'en' ? 'en' : 'ar';
                      }

                      export function AppProvider({ children }: { children: ReactNode }) {
                        const [theme, setTheme] = useState<Theme>(getInitialTheme);
                          const [language, setLanguage] = useState<Language>(getInitialLanguage);

                            useEffect(() => {
                                const root = document.documentElement;
                                    if (theme === 'dark') root.classList.add('dark');
                                        else root.classList.remove('dark');
                                            localStorage.setItem('theme', theme);
                                              }, [theme]);

                                                useEffect(() => {
                                                    const root = document.documentElement;
                                                        root.setAttribute('lang', language);
                                                            root.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
                                                                localStorage.setItem('language', language);
                                                                  }, [language]);

                                                                    const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
                                                                      const toggleLanguage = () => setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));

                                                                        return (
                                                                            <AppContext.Provider value={{ theme, language, toggleTheme, toggleLanguage }}>
                                                                                  {children}
                                                                                      </AppContext.Provider>
                                                                                        );
                                                                                        }

                                                                                        export function useApp() {
                                                                                          const context = useContext(AppContext);
                                                                                            if (!context) throw new Error('useApp must be used within an AppProvider');
                                                                                              return context;
                                                                                              }
                                                                                              
