import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-8 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start">
        {/* About Us Section */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-black">
            We at AgroPredict are committed to providing the most accurate crop price predictions
            and empowering farmers with actionable insights. Join us in building a sustainable
            future in agriculture.
          </p>
        </div>

        {/* Feedback Section */}
        <div className="lg:w-1/2">
          <h2 className="text-xl tfont-bold mb-4">Feedback</h2>
          <form>
            <textarea
              className="w-full h-32 p-2 rounded-lg text-black"
              placeholder="Your feedback..."
            ></textarea>
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; 2025 AgroPredict. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
