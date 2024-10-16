"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or brand image */}
        <div className="flex items-center space-x-4">
          <Image width={20} height={20} src="/Mask group.png" alt="Circle" />
          <Image width={60} height={60} src="/image 37.png" alt="Logo" />
        </div>

        {/* Hamburger icon for mobile view */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Menu links for large screens */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li><Link href="/Features">Features</Link></li>
          <li><Link href="/Pricing">Pricing</Link></li>
          <li><Link href="/Testimonials">Testimonials</Link></li>
          <li><Link href="/Resources">Resources</Link></li>
          <li className="font-bold text-black">
            <div className="flex items-center space-x-4">
              <Image width={20} height={20} src="/Mask group.png" alt="Circle" />
              <Image width={60} height={60} src="/image 37.png" alt="Circle" />
            </div>
          </li>
          <li><Link href="/Company">Company</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
          <li>
            <Link href="/Login">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Dropdown menu for mobile view */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-black mt-4">
            <li><Link href="/Features">Features</Link></li>
            <li><Link href="/Pricing">Pricing</Link></li>
            <li><Link href="/Testimonials">Testimonials</Link></li>
            <li><Link href="/Resources">Resources</Link></li>
            <li><Link href="/Company">Company</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
            <li>
              <Link href="/Login">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;