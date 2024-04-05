"use client";

import Divider from "../ui/Divider";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-lg font-bold mb-2">Company</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Products</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Resources</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <ul>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <Divider />
        <div className="md:flex justify-between">
          <p className="mt-8 text-center">
            © 2023 Your Company. All rights reserved.
          </p>

          <p className="mt-8 text-center">Powered by Next.js</p>
        </div>
      </div>
    </footer>
  );
}
