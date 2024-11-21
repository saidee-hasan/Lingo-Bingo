import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p>Learn more about our mission and values.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />
            123 Main St, Anytown, USA
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            (123) 456-7890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
            info@example.com
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <nav>
            <ul className="space-y-1">
              <li>
                <a href="/privacy-policy" className="hover:text-blue-400 transition duration-200" aria-label="Privacy Policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-blue-400 transition duration-200" aria-label="Terms of Service">Terms of Service</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400 transition duration-200" aria-label="Contact Us">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <p>Stay connected with us on social media.</p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="hover:text-blue-400 transition duration-200">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="hover:text-blue-400 transition duration-200">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="hover:text-blue-400 transition duration-200">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            
           
          </ul>
        </div>
      </div>
      <div className="text-center mt-6">
        <p className="mb-2">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
          © {currentYear} My Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;