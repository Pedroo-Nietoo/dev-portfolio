"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type PortfolioTheme = "dark" | "light";

interface ThemeContextValue {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  setTheme: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
}: {
  children: ReactNode;
  defaultTheme?: PortfolioTheme;
}) {
  const [theme, setThemeState] = useState<PortfolioTheme>(defaultTheme);

  const setTheme = (nextTheme: PortfolioTheme) => {
    setThemeState(nextTheme);
    try {
      localStorage.setItem("portfolio-theme", nextTheme);
    } catch {}
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved === "light" || saved === "dark") {
        setThemeState(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    const href =
      theme === "dark" ? "/favicon-dark.png" : "/favicon-light.png";

    const links = document.querySelectorAll<HTMLLinkElement>(
      "link[rel='icon'], link[rel='shortcut icon']"
    );

    if (links.length > 0) {
      links.forEach((link) => {
        link.type = "image/png";
        link.href = href;
      });
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = href;
      document.head.appendChild(link);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div
        className={
          theme === "light"
            ? "theme-light font-sans min-h-screen bg-[#FAFAFA] text-[#09090B] transition-colors duration-300"
            : "theme-dark font-sans min-h-screen bg-[#09090B] text-white transition-colors duration-300"
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
