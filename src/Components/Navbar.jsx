import React from "react";

function Navbar() {
  return (
    <nav className="no-scrollbar fixed w-full bg-black text-white py-4 shadow-lg px-6 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl  font-bold text-purple-500">
        Gallery Project
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex gap-8 text-lg">
        <li className="hover:text-purple-400 cursor-pointer transition">Home</li>
        <li className="hover:text-purple-400 cursor-pointer transition">Gallery</li>
        <li className="hover:text-purple-400 cursor-pointer transition">About</li>
        <li className="hover:text-purple-400 cursor-pointer transition">Contact</li>
      </ul>

      {/* Button */}
      <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white font-semibold transition">
        Login
      </button>
    </nav>
  );
}

export default Navbar;
