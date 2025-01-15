"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="rounded-3xl w-full border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg mx-auto mt-6">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a aria-current="page" className="flex items-center" href="/">
                <img
                  className="h-8 w-auto md:h-11"
                  src="./4.svg"
                  alt="Website Logo"
                />
                <p className="sr-only">Website Title</p>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-lg p-2 hover:bg-gray-100"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Home
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Enterprise
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#pricing"
              >
                Pricing
              </a>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Contact
              </a>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex md:items-center md:justify-end md:gap-3">
              <a
                className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
                href="/login"
              >
                Get Started
              </a>
              <a
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                href="/login"
              >
                Login
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                  href="#"
                >
                  Enterprise
                </a>
                <a
                  className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                  href="#"
                >
                  Pricing
                </a>
                <a
                  className="px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg"
                  href="#"
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-2 pt-2">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50"
                    href="/login"
                  >
                    Get Started
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/login"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}