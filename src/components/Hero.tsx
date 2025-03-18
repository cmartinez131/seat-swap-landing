// components/Hero.tsx

const Hero = () => {
  return (
    <section className="relative bg-black overflow-hidden pt-32 pb-20 lg:h-screen lg:max-h-[748px] flex items-center">
      {/* Blue Accent Shape in Bottom-Left (Shown on Large Screens) */}
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <svg width="272" height="272" fill="none">
          <path d="M0 0L272 272H0V0Z" fill="#1440CC" />
        </svg>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
        {/* Left Section: Headline + Subtext + Store Badges */}
        <div className="max-w-2xl mb-10 lg:mb-0">
          <h1 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
            <span className="bg-[#00D973] text-black px-2 py-1 inline-block">
              Trade Tickets
            </span>{" "}
            – Upgrade Your Experience Live
          </h1>

          <p className="text-white lg:text-lg font-semi-bold mt-4 max-w-lg leading-relaxed">
            Transform your live event experience.
            Sell, upgrade, or swap premium seats in real time for a better view and extra revenue.
            <span className="text-white">
              {" "}
              Whether you’re leaving early or craving an upgrade,
            </span>{" "}
            SeatSwap connects fans securely for a seamless in-event transaction.
          </p>

          {/* Store Badges */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://yourapp.com/download/ios"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition hover:opacity-80"
            >
              <img
                src="data:image/png;base64,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"
                alt="Download on the App Store"
                className="w-32"
              />
            </a>
            <a
              href="https://yourapp.com/download/android"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center transition hover:opacity-80"
            >
              <img
                src="data:image/png;base64,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"
                alt="Get it on Google Play"
                className="w-32"
              />
            </a>
          </div>
        </div>

        {/* Right Section: Phone Mockup (Hidden on Small Screens) */}
        <div className="hidden lg:block">
          <img
            src="https://www.citypng.com/public/uploads/preview/iphone-14-pro-gold-on-hand-mockup-hd-png-735811696260791rqcduwhmz0.png"
            alt="SeatSwap App Mockup"
            className="max-w-[400px] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
