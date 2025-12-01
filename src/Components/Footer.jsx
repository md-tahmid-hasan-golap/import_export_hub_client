import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/assets/photo-1726828537956-61ae115d7d7a.avif";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-12">
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Logo & Info */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-lg" />
            <span className="font-bold text-xl">Import Export Hub</span>
          </div>
          <p className="text-gray-600">Alinagar, Gomastapur</p>
          <p className="text-gray-600">Chapainawabganj, Bangladesh</p>
          <p className="text-gray-600">
            Email:{" "}
            <a
              href="mailto:golapraj47@gmail.com"
              className="hover:text-purple-600 transition-colors"
            >
              golapraj47@gmail.com
            </a>
          </p>
          <p className="text-gray-600">
            Phone:{" "}
            <a
              href="tel:+8801707115247"
              className="hover:text-purple-600 transition-colors"
            >
              01707115247
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h6 className="footer-title text-lg font-bold mb-3">Quick Links</h6>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:text-purple-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/allProducts"
                className="hover:text-purple-600 transition-colors"
              >
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/addExport"
                className="hover:text-purple-600 transition-colors"
              >
                Add Product
              </Link>
            </li>
            <li>
              <Link
                to="/myExports"
                className="hover:text-purple-600 transition-colors"
              >
                My Products
              </Link>
            </li>
            <li>
              <Link
                to="/myImports"
                className="hover:text-purple-600 transition-colors"
              >
                My Imports
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        {/* <div>
          <h6 className="footer-title text-lg font-bold mb-3">Policies</h6>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Accurate Information Required</li>
            <li>No Illegal Use Allowed</li>
            <li>User Data Protected</li>
          </ul>
        </div> */}

        {/* Social Links */}
        <div>
          <h6 className="footer-title text-lg font-bold mb-3">Follow Us</h6>
          <div className="flex gap-4 mt-2">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/g.lap.raj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-tahmid-hasan-golap/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.381 1.11-2.5 2.48-2.5s2.48 1.119 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.5 0h-4.5v16h4.5v-8.25c0-4.54 6-4.91 6 0v8.25h4.5v-10.75c0-9.04-10-8.72-10-4.25v-1z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/md-tahmid-hasan-golap"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 5.92.435.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 text-sm text-gray-500">
        © 2025 Import Export Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
