// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2f2f2f] text-white">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-y-8">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/" className="block mb-6">
              <img
                src="/assets/ticketslogo.png"
                alt="ticket-trader-landing Logo"
                className="w-15"
              />
            </Link>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/YourApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-[#00D973] transition-colors"
              >
                <svg className="fill-current w-full h-full">
                  <use xlinkHref="/assets/sprite.svg#icon-instagram" />
                </svg>
              </a>
              <a
                href="https://twitter.com/YourApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-[#00D973] transition-colors"
              >
                <svg className="fill-current w-full h-full">
                  <use xlinkHref="/assets/sprite.svg#icon-twitter" />
                </svg>
              </a>
              <a
                href="https://facebook.com/YourApp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 hover:text-[#00D973] transition-colors"
              >
                <svg className="fill-current w-full h-full">
                  <use xlinkHref="/assets/sprite.svg#icon-facebook" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col lg:flex-row gap-10 text-sm">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="hover:text-[#00D973] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#00D973] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#00D973] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/how-it-works" className="hover:text-[#00D973] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00D973] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-[#00D973] transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#252525] py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-y-4 text-gray-400 text-xs">
          <p>
            © {new Date().getFullYear()} ticket-trader-landing. All Rights Reserved.
          </p>
          <p>
            <Link
              href="/privacy"
              className="hover:text-white hover:underline transition-colors mx-2"
            >
              Privacy
            </Link>
            |
            <Link
              href="/terms"
              className="hover:text-white hover:underline transition-colors mx-2"
            >
              Terms
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
