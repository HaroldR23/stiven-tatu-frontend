import { Languages } from "@/app/models";

export interface PreferencesContextProps {
    language: Languages;
    setLanguage: (language: Languages) => void;
}
