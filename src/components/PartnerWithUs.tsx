// components/PartnerWithUs.tsx

export default function PartnerWithUs() {
  return (
    <section id="partner-with-us" className="bg-[#FF67A8] py-20 text-white">
      <div
        className="
          container mx-auto px-4
          flex flex-col lg:flex-row
          items-center justify-between
          gap-10    /* Added gap for horizontal spacing on large screens */
        "
      >
        {/* Left Side: Heading & Text */}
        <div className="max-w-xl mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 uppercase tracking-wider">
            Improve your fan experience with SeatSwap.
          </h2>
          <p className="text-lg leading-relaxed">
            We help stadiums, teams, and event organizers transform empty seats
            into new revenue—all while delighting fans with in-event upgrades.
            Let’s partner to elevate the live event experience.
          </p>
          {/* CTA Button */}
          <button className="mt-6 px-5 py-3 bg-black rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300">
            Partner with us
          </button>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://www.ajc.com/resizer/v2/3RMZUXJP2JBYNBJJU73QEXHIGM.JPG?auth=e9c0743f2d221f7c64ea166bff3d3acb7b1c5603c904b235d48a055ec4e9061f&width=1460&height=800&smart=true"
            alt="Partner with SeatSwap"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
