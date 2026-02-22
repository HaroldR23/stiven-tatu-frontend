"use client";

import { useState } from "react";
import usePreferences from "../hooks/usePreferences";
import Hero from "./components/Hero";
import BookingModal from "./components/Booking/BookingModal";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Products from "./components/Products";
import FAQ from "./components/FAQ";
import Aftercare from "./components/Aftercare";

export default function Home() {
  const { language } = usePreferences();
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);

  return (
    <div>
      <Hero language={language} onBookingClick={() => setIsBookingOpen(true)}/>
      <About language={language} />
      <Reviews language={language} />
      <Products language={language} />
      <FAQ language={language} />
      <Aftercare language={language} />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        language={language} 
      />
    </div>
  );
};
