// components/HowItWorks.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";

// Custom hook to detect when an element is in view
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

const HowItWorks = () => {
  // Create refs for each step
  const step1 = useInView(0.1);
  const step2 = useInView(0.1);
  const step3 = useInView(0.1);
  const step4 = useInView(0.1);
  const step5 = useInView(0.1);

  // Helper for the placeholder image (smaller version)
  const imageSrc =
    "https://i.pinimg.com/550x/d4/ae/f8/d4aef847853898829d99385b738ff387.jpg";

  return (
    <section id="how-it-works" className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          How SeatSwap Works
        </h2>

        {/* STEP 1: (Odd – Image Left, Text Right) */}
        <div
          ref={step1.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 mb-16 transition-all duration-700 transform ${
            step1.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="SeatSwap Step 1"
              className="rounded-lg shadow-lg max-w-sm w-full mx-auto"
            />
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              1. Home / Check-In
            </h3>
            <p className="text-gray-700 mb-4">
              Scan your original event ticket to verify and mark your seat as available.
              This step is quick and ensures everyone is legit.
            </p>
            <p className="text-sm text-gray-500">
              Example: Section 412, Row 15, Seat 9
            </p>
          </div>
        </div>

        {/* STEP 2: (Even – Text Left, Image Right) */}
        <div
          ref={step2.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 mb-16 transition-all duration-700 transform ${
            step2.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              2. Marketplace
            </h3>
            <p className="text-gray-700 mb-4">
              Browse seats put up for grabs by other fans. See seat location, price, and time left.
              Perfect for that mid-game upgrade!
            </p>
            <p className="text-sm text-gray-500">
              Example: Section 110, Row 3, Seat 2 | $15
            </p>
          </div>
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="SeatSwap Step 2"
              className="rounded-lg shadow-lg max-w-sm w-full mx-auto"
            />
          </div>
        </div>

        {/* STEP 3: (Odd – Image Left, Text Right) */}
        <div
          ref={step3.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 mb-16 transition-all duration-700 transform ${
            step3.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="SeatSwap Step 3"
              className="rounded-lg shadow-lg max-w-sm w-full mx-auto"
            />
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              3. Seat Details
            </h3>
            <p className="text-gray-700 mb-4">
              Check the seat’s exact location, price, and time remaining before it’s gone.
              Ready to upgrade?
            </p>
            <p className="text-sm text-gray-500">
              Example: Section 220, Row 9, Seat 3
            </p>
          </div>
        </div>

        {/* STEP 4: (Even – Text Left, Image Right) */}
        <div
          ref={step4.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 mb-16 transition-all duration-700 transform ${
            step4.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              4. Seller Notification
            </h3>
            <p className="text-gray-700 mb-4">
              Sellers receive an instant offer notification. They can confirm or decline based on the price,
              with no fuss or awkward haggling.
            </p>
            <p className="text-sm text-gray-500">
              Example: “Someone wants your seat! Offer: $10”
            </p>
          </div>
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="SeatSwap Step 4"
              className="rounded-lg shadow-lg max-w-sm w-full mx-auto"
            />
          </div>
        </div>

        {/* STEP 5: (Odd – Image Left, Text Right) */}
        <div
          ref={step5.ref}
          className={`flex flex-col lg:flex-row items-center gap-8 transition-all duration-700 transform ${
            step5.isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={imageSrc}
              alt="SeatSwap Step 5"
              className="rounded-lg shadow-lg max-w-sm w-full mx-auto"
            />
          </div>
          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              5. Digital Handshake
            </h3>
            <p className="text-gray-700 mb-4">
              Once both sides confirm, SeatSwap detects proximity and instantly transfers the seat.
              Enjoy your new view!
            </p>
            <p className="text-sm text-gray-500">
              Example: “Transfer Complete! New Seat: Section 220, Row 9, Seat 3”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
