import React from "react";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Logo and slogan */}
        <h2 className="text-4xl md:text-5xl font-bold mb-3">KeenKeeper</h2>
        <p className="text-gray-300 mb-6 text-sm md:text-base max-w-md mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        {/* Social Links Section */}
        <div className="mb-8">
          <h3 className="text-base font-semibold mb-4 text-gray-200">
            Social Links
          </h3>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="p-3 bg-white rounded-full transition-transform hover:scale-110 shadow-sm"
            >
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full transition-transform hover:scale-110 shadow-sm"
            >
              <img
                src={facebookIcon}
                alt="Facebook"
                className="w-6 h-6 object-contain"
              />
            </a>
            <a
              href="#"
              className="p-3 bg-white rounded-full transition-transform hover:scale-110 shadow-sm"
            >
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
        {/* Copyright part */}
        <div className="border-t border-white/20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm  text-[#FAFAFA]">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex gap-4 md:gap-8">
              <a
                href="#"
                className=" text-[#FAFAFA] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[#FAFAFA] hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className=" text-[#FAFAFA] hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
