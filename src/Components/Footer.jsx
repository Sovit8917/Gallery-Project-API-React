import React from "react";

function Footer() {
  return (
    <footer className="w-full  bg-black text-gray-400 py-6 mt-5 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section */}
        <h2 className="text-lg font-semibold text-white tracking-wide">
          Gallery Project
        </h2>

        {/* Center Links */}
        <div className="flex gap-6 text-sm my-3 md:my-0">
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Support</a>
        </div>

        {/* Right Section */}
        <p className="text-sm">
          © {new Date().getFullYear()} Sovit Gallery. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
