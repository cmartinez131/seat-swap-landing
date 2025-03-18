// components/Newsletter.tsx

"use client";

export default function Newsletter() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            Never Miss Out on a Better Seat!
          </h2>

          {/* Sub-Headline */}
          <p className="text-md lg:text-lg text-gray-200 mb-6 font-medium">
            Sign up for exclusive seating tips, early-bird upgrade offers, 
            and the latest SeatSwap news—so you never miss out on a better seat.
          </p>

          {/* Form */}
          <form
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Implement your sign-up logic here
              alert("Thank you for signing up!");
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full sm:w-auto flex-1 px-4 py-3 rounded-md 
                         bg-white text-black
                         focus:outline-none focus:ring-2 focus:ring-offset-2 
                         focus:ring-[#00D973]"
            />
            <button
              type="submit"
              className="bg-[#00D973] text-black font-semibold px-6 py-3 rounded-md
                         hover:bg-[#00ec88] transition-colors duration-300"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
