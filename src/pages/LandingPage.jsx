import React from "react";
import QuoteSection from "../components/QuoteSection";

const LandingPage = () => {
  return (
    <>
      <QuoteSection />
      <section
        id="about"
        className="py-20 bg-gray-100 text-gray-800 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <p className="text-lg">
            We specialize in providing custom-tailored solutions to meet your
            business needs. Our dedicated team ensures excellence and precision
            in every project.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="py-20 bg-white text-gray-800 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <ul className="space-y-4 text-lg">
            <li>✔ Web Development</li>
            <li>✔ Digital Marketing</li>
            <li>✔ Business Consulting</li>
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-gray-100 text-gray-800 text-center"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="text-lg">Email: info@clientcompany.com</p>
          <p className="text-lg">Phone: +123 456 7890</p>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
