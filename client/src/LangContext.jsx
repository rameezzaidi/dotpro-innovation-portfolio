import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UI } from "./i18n.js";

const LangContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    return saved === "ur" ? "ur" : "en";
  } catch {
    return "en";
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
    try {
      localStorage.setItem("lang", lang);
    } catch {
      /* storage unavailable, ignore */
    }
  }, [lang]);

  const value = useMemo(() => {
    const t = (key, vars) => {
      const raw = UI[lang][key] ?? UI.en[key] ?? key;
      if (typeof raw !== "string" || !vars) return raw;
      return Object.entries(vars).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, v), raw);
    };
    return { lang, setLang, t };
  }, [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
