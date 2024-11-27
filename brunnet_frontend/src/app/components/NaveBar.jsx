'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingCart } from 'lucide-react';
import logo from '../asset/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Main Navbar */}
      <div className="container mx-auto px-4 py-7 flex items-center justify-between">
        {/* Left Section */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <span>(303) 555-0105</span>
          <span>Info@la-studioweb.com</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo (Center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src={logo}
            alt="Brunette & Co. Charcuterie Logo"
            width={150}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition"
          >
            Sign Up
          </Link>
          <Link
            href="/cart"
            className="flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart</span>
          </Link>
        </div>

        {/* Mobile Cart Icon */}
        <div className="md:hidden">
          <Link href="/cart">
            <ShoppingCart className="w-6 h-6" />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 shadow-lg py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link href="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-600">
              About Us
            </Link>
            <Link href="/gallery" className="text-gray-800 hover:text-gray-600">
              Gallery
            </Link>
            <Link href="/event-menu" className="text-gray-800 hover:text-gray-600">
              Event Menu
            </Link>
            <Link href="/workshops" className="text-gray-800 hover:text-gray-600">
              Workshops
            </Link>
            <Link href="/events" className="text-gray-800 hover:text-gray-600">
              Events
            </Link>
            <Link href="/past-orders" className="text-gray-800 hover:text-gray-600">
              Past Orders
            </Link>
            <Link href="/active-orders" className="text-gray-800 hover:text-gray-600">
              Active Orders
            </Link>

            <div className="border-t pt-4 space-y-2 text-gray-600 text-sm">
              <span>(303) 555-0105</span>
              <span>Info@la-studioweb.com</span>
              <Link href="/login" className="hover:underline">
                Login
              </Link>
              <Link href="/signup" className="hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex justify-center bg-gray-50 py-4">
        <div className="flex space-x-8 text-gray-700">
          <Link href="/" className="hover:text-gray-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-500 transition">
            About Us
          </Link>
          <Link href="/gallery" className="hover:text-gray-500 transition">
            Gallery
          </Link>
          <Link href="/event-menu" className="hover:text-gray-500 transition">
            Event Menu
          </Link>
          <Link href="/workshops" className="hover:text-gray-500 transition">
            Workshops
          </Link>
          <Link href="/events" className="hover:text-gray-500 transition">
            Events
          </Link>
          <Link href="/past-orders" className="hover:text-gray-500 transition">
            Past Orders
          </Link>
          <Link href="/active-orders" className="hover:text-gray-500 transition">
            Active Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}
