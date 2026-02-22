"use client"

import { useEffect, useState } from "react";
import { PreferencesContext } from "./preferencesContext";
import { Languages } from "@/app/models";

const PreferencesProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(Languages.SPANISH);

  useEffect(() => {
    const stored = window.localStorage.getItem("language");
    if (stored && Object.values(Languages).includes(stored as Languages)) {
      setLanguage(stored as Languages);
    }
  }, []);


  const handleLanguageChange = (value: Languages) => {
    setLanguage(value);
    window.localStorage.setItem("language", value.toString());
  };
  return (
    <PreferencesContext.Provider 
      value={{ language: language, setLanguage: handleLanguageChange }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export default PreferencesProvider;
