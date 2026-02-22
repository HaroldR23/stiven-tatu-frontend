"use client";

import { useState } from "react";
import usePreferences from "../hooks/usePreferences";
import Hero from "./components/Hero";
import BookingModal from "./components/Booking/BookingModal";
import About from "./components/About";

export default function Home() {
  const { language } = usePreferences();
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div>
      <Hero language={language} onBookingClick={() => setIsBookingOpen(true)}/>
      <About language={language} />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        language={language} 
      />
    </div>
  );
};
