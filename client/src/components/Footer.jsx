import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white h-full px-6 sm:px-10 lg:px-36 m-0 py-6">
      <div className="container mx-auto  ">
        <div className="flex justify-between   ">
          <div className=" mb-4 md:mb-0 ">
            <h3 className="text-lg mb-2">About</h3>
            <p className="text-white/90 text-sm">This is a blog about news.</p>
          </div>

          <div className="">
            <h3 className="text-lg mb-2">Quick Link</h3>
            <ul className="space-y-1 ">
              <Link to="/" className="text-gray-300 hover:text-white block">
                Home
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block"
              >
                Contact
              </Link>
            </ul>
          </div>

          <div className="mb-4 md:mb-0 ">
            <h3 className="text-lg mb-2">Tags</h3>
            <ul className="space-y-1 ">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  Entertainment
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Technology
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-white">
                  Sports
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-2   sm:mt-8  text-center">
        <p>© 2023 BLOGIFY. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
