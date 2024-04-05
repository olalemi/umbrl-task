"use client";

import Divider from "../ui/Divider";
import {
    FaTwitter,
    FaLinkedin,
    FaFacebookF,
    FaInstagram,
  } from "react-icons/fa6";
import Link from "next/link";


export default function Footer() {

    const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gray-800 text-white p-4 w-full">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xs mb-2">Company</h2>
            <ul >
              <li>
                <Link href="#" className="hover:text-gray-400 mt-10 ">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 mt-8">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400 mt-4">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs mb-2">Products</h2>
            <ul>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs mb-2">Services</h2>
            <ul>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Support
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs  mb-2">Legal</h2>
            <ul>
              <li>
                <Link href="#" className="hover:text-gray-400">
                Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
Terms & Conditions

                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-400">
                Return Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 lg:mt-32">

        <Divider />
        </div>
        <div className="md:flex justify-between">
          <p className="mt-8 text-center">
          © {currentYear} Copyright, All Right Reserved, Made by Seju_ui_ux 

         
          </p>

          <div className="flex justify-between row">
          <FaTwitter
              style={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "40px",
                padding: "10px",
              }}
            />
                <FaFacebookF
              style={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "40px",
                padding: "10px",
              }}
            />


                <FaInstagram
              style={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "40px",
                padding: "10px",
              }}
            />

            <FaLinkedin
              style={{
                color: "#fff",
                cursor: "pointer",
                fontSize: "40px",
                padding: "10px",
              }}
            />

            

           


          </div>
        </div>
      </div>
    </footer>
  );
}
