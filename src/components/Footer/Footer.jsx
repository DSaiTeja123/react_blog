import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <section className="relative overflow-hidden py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="-m-6 flex flex-wrap">
          {/* Logo & Copy */}
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-6 inline-flex items-center">
                <Logo width="120px" />
              </div>
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} <span className="text-accent font-semibold">D Sai Teja</span>. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Company</h3>
            <ul>
              {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                <li key={item} className="mb-3">
                  <Link
                    to="/"
                    className="text-base text-gray-300 hover:text-accent transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Support</h3>
            <ul>
              {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                <li key={item} className="mb-3">
                  <Link
                    to="/"
                    className="text-base text-gray-300 hover:text-accent transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Legals</h3>
            <ul>
              {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                <li key={item} className="mb-3">
                  <Link
                    to="/"
                    className="text-base text-gray-300 hover:text-accent transition duration-300 ease-in-out"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
