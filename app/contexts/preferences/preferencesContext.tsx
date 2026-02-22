"use client"

import { createContext } from "react";
import { PreferencesContextProps } from "./preferencesContextProps";
import { Languages } from "@/app/models";


export const PreferencesContext = createContext<PreferencesContextProps>({
  language: Languages.ENGLISH,
  setLanguage: () => {},
});
