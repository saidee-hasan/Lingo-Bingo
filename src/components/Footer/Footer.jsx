// src/components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
          © {currentYear} My Website. All rights reserved.
        </p>
        <nav>
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-blue-400">Terms of Service</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;