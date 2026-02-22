"use client";

import { useState } from "react";
import usePreferences from "../hooks/usePreferences";
import Hero from "./components/Hero";
import BookingModal from "./components/Booking/BookingModal";

export default function Home() {
  const { language } = usePreferences();
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div>
      <Hero language={language} onBookingClick={() => setIsBookingOpen(true)}/>
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        language={language} 
      />
    </div>
  );
};
