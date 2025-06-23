"use client";

import { useState, useEffect } from "react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgImage: string;
  buttonVariant?: "primary" | "default";
}

const slides: Slide[] = [
  {
    id: 0,
    title: "FINTECH LADIES",
    subtitle: "The network for women in finance and tech.",
    buttonText: "SEE OUR EVENTS",
    buttonLink: "#events",
    bgImage: "/images/hero-slide-1.jpg",
    buttonVariant: "primary",
  },
  {
    id: 1,
    title: "CONNECT",
    subtitle:
      "We want to connect women working on digitisation and innovation in the finance and tech industry.",
    buttonText: "JOIN THE NETWORK",
    buttonLink: "#contact",
    bgImage: "/images/hero-slide-2.jpg",
  },
  {
    id: 2,
    title: "LEARN",
    subtitle:
      "We want to create a community where we can learn and grow together. Our events focus on learning and knowledge exchange.",
    buttonText: "SEE OUR EVENTS",
    buttonLink: "#events",
    bgImage: "/images/hero-slide-3.jpg",
    buttonVariant: "primary",
  },
  {
    id: 3,
    title: "INSPIRE",
    subtitle:
      "We are a network of women who are passionate about their career. We support and empower each other. Together, we want to reshape the financial industry.",
    buttonText: "JOIN THE NETWORK",
    buttonLink: "#contact",
    bgImage: "/images/hero-slide-4.jpg",
  },
];
export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {" "}
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-8 animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection(slides[currentSlide].buttonLink)}
              className={`px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 animate-fade-in-delay-2 ${
                slides[currentSlide].buttonVariant === "primary"
                  ? "bg-ftl-green text-white hover:bg-ftl-dark-green"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              {slides[currentSlide].buttonText}
            </button>
            {currentSlide === 0 && (
              <button
                onClick={() => scrollToSection("#contact")}
                className="px-8 py-4 text-lg font-medium rounded-lg bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 animate-fade-in-delay-2"
              >
                JOIN OUR NETWORK
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Side Navigation */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20"
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors z-20"
      >
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
