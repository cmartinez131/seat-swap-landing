"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const threshold = 200;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos < threshold) {
        setHideHeader(false);
      } else if (currentScrollPos > lastScrollPos) {
        // Scrolling down past threshold
        setHideHeader(true);
      } else if (currentScrollPos < lastScrollPos) {
        // Scrolling up
        setHideHeader(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <>
      {/* Smooth scrolling for anchor links */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 bg-black transition-transform duration-500 ease-out shadow-md ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
        style={{ fontFamily: "'Archivo', sans-serif" }}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          {/* Logo + App Name */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img
              src="/assets/ticketslogo.png"
              alt="ticket-trader-landing Logo"
              className="w-15"
            />
            <span className="ml-3 text-white text-2xl lg:text-3xl font-bold uppercase tracking-wide">
              SEATSWAP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-white text-sm uppercase tracking-wide font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973]"
                >
                  About
                </Link>
              </li>
              <li>
                {/* Features link scrolls to HowItWorks */}
                <Link
                  href="/#how-it-works"
                  className="text-white text-sm uppercase tracking-wide font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973]"
                >
                  Features
                </Link>
              </li>
              <li>
                {/* Partners link now scrolls to PartnerWithUs */}
                <Link
                  href="/#partner-with-us"
                  className="text-white text-sm uppercase tracking-wide font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973]"
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-sm uppercase tracking-wide font-medium transition-colors duration-300 border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Call-to-Action Button (Desktop) */}
          <Link
            href="/download"
            className="hidden lg:inline-block bg-[#00D973] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#00ec88] transition-colors duration-300 cursor-pointer"
          >
            Get the App
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-black border-t border-gray-800">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  href="/about"
                  className="text-white text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-white text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#partner-with-us"
                  className="text-white text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Partners
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white text-base uppercase tracking-wider border-b-2 border-transparent hover:border-[#00D973] hover:text-[#00D973] transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {/* Mobile CTA Button */}
              <li>
                <Link
                  href="/download"
                  className="bg-[#00D973] text-black font-semibold px-5 py-2 rounded-full hover:bg-[#00ec88] transition-colors duration-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get the App
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
