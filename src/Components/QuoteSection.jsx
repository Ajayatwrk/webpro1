import React, { useState, useEffect } from "react";

const QuoteSection = () => {
  const [displayedText, setDisplayedText] = useState(""); // Animated text
  const fullText = "Empowering businesses through innovative solutions."; // The quote
  const typingSpeed = 80; // Speed for letter-by-letter animation (ms)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]); // Add one letter at a time
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen bg-white flex flex-col md:flex-row items-center justify-center text-black">
      {/* Left Section: Animated Quote */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-6">
        <h2 className="text-4xl md:text-6xl font-bold leading-snug">
          {displayedText}
        </h2>
      </div>

      {/* Right Section: PNG Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="/path-to-your-image.png"
          alt="Innovative solutions"
          className="max-w-full h-auto md:max-w-[400px] object-contain"
        />
      </div>
    </section>
  );
};

export default QuoteSection;
