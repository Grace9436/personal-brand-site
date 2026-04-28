import { createContext, useContext, useState, type ReactNode } from "react";
import * as enContent from "../data/locales/en";
import * as zhContent from "../data/locales/zh";

type Language = "en" | "zh";
type Content = typeof enContent;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  try {
    const stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    // localStorage unavailable
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // localStorage unavailable
    }
  };

  const content = language === "zh" ? zhContent : enContent;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent(): Content {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useContent must be used within a LanguageProvider");
  return ctx.content;
}

export function useLanguage(): { language: Language; setLanguage: (lang: Language) => void } {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return { language: ctx.language, setLanguage: ctx.setLanguage };
}
