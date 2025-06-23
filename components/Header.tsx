"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/ftl-logo-60.png"
              alt="Fintech Ladies Logo"
              width={60}
              height={60}
              className="-ml-4"
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("events")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Team
            </button>
            <Link
              href="/news"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              News
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              Contact
            </button>
            <Link
              href="/faq"
              className={`font-medium transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-ftl-green"
                  : "text-white hover:text-gray-200"
              }`}
            >
              FAQ
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`font-medium ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("events")}
                className={`font-medium text-left ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className={`font-medium text-left ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Team
              </button>
              <Link
                href="/news"
                className={`font-medium ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                News
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-medium text-left ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Contact
              </button>
              <Link
                href="/faq"
                className={`font-medium ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}