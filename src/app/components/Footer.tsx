import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#01000f] text-white py-8 px-4 ">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Column - About */}
        <div>
          <h2 className="text-lg font-bold">Magic Stories</h2>
          <p className="text-gray-400 text-sm mt-2">
          We share stories that inspire, educate, and bring people together across the world.
          Our content, from blog posts to community stories, is crafted to connect with and resonate with everyone.
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h2 className="text-lg font-bold">Quick Links</h2>
          <ul className="text-gray-400 space-y-1 mt-2">
            <li><Link href="/blog" className="hover:text-white">Blogs</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Right Column - Social Links */}
        <div>
          <h2 className="text-lg font-bold">Follow Us</h2>
          <ul className="text-gray-400 space-y-2 mt-2">
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaTwitter className="text-white" />
              <Link href="#" className="hover:text-white">Twitter</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaInstagram className="text-white" />
              <Link href="#" className="hover:text-white">Instagram</Link>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-2">
              <FaLinkedin className="text-white" />
              <Link href="#" className="hover:text-white">LinkedIn</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        Made by <span className="font-bold text-white">Sumair Khan!</span>
      </div>
    </footer>
  );
};

export default Footer;
