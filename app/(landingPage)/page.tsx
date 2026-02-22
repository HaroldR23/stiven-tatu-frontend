"use client";

import usePreferences from "../hooks/usePreferences";
import Hero from "./components/Hero";

export default function Home() {
  const { language } = usePreferences();

  return (
    <div>
      <Hero language={language}/>
    </div>
  );
};
