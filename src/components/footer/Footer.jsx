import React from "react";
import "./style.css";
import logo from "../../assets/images/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitch,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import { HiLocationMarker } from "react-icons/hi";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div id="container" className="w-full relative h-[1200px] md:h-[600px]">
      <div className="absolute p-16 h-full w-full bg-[#000000a6]">
        <footer className="footer p-10 text-white">
          <nav>
            <header className="text-white text-lg font-semibold mb-4">
              MY ACCOUNT
            </header>
            <a className="link link-hover">My Account</a>
            <a className="link link-hover">My Order</a>
            <a className="link link-hover">Wishlist</a>
            <a className="link link-hover">Newsletter</a>
          </nav>
          <nav>
            <header className="text-white text-lg font-semibold mb-4">
              INFORMATION
            </header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Delivery Information</a>
            <a className="link link-hover">Contact us</a>
            <a className="link link-hover">Sitemap</a>
          </nav>
          <nav>
            <header className="text-white text-lg font-semibold mb-4">
              WORKING TIME
            </header>
            <a className="link link-hover">Monday - Friday : 9 am to 12 am.</a>
            <a className="link link-hover">Saturday - Sunday : 24 Hour Open</a>
            <a className="link link-hover">Breakfast : 7 am to 12 pm</a>
            <a className="link link-hover">Lunch : 12 pm to 7 pm</a>
            <a className="link link-hover">Dinner : 7 am to 12 am</a>
          </nav>
          <nav>
            <header className="text-white text-lg font-semibold mb-4">
              WORKING TIME
            </header>
            <div className="space-y-3">
              <a className="link link-hover flex gap-1">
                <HiLocationMarker className="text-xl text-[#ffa41f]" />
                <p>
                  123 St 3, Restaurant Food & <br /> Drinks, Near Bala Ji Chownk,
                  Ludhiana, INDIA
                </p>{" "}
              </a>
              <a className="link link-hover flex gap-1">
                <AiFillPhone className="text-xl text-[#ffa41f]" />
                <p>1800 123 0000, +91 123457890</p>
              </a>
              <a className="link link-hover flex gap-1">
                <AiOutlineMail className="text-xl text-[#ffa41f]" />
                <p>Info@restaurant.com</p>
              </a>
            </div>
          </nav>
        </footer>
        <footer className="footer flex text-white justify-between items-center px-10 py-4 border-t border-base-300">
          <aside className="items-center grid-flow-col">
            <img src={logo} alt="" />
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <div>
                <p>
                  Copyright ©{" "}
                  <span className="text-[#ffa41f]">
                    Restaurant Food & Drinks{" "}
                  </span>
                  2017. All Rights Reserved.
                </p>
              </div>
            </div>
          </nav>
          <div className="flex gap-4 text-white text-xl">
            <FaFacebook className="hover:text-[#ffa41f]" />
            <FaInstagram className="hover:text-[#ffa41f]" />
            <FaTwitch className="hover:text-[#ffa41f]" />
            <FaLinkedin className="hover:text-[#ffa41f]" />
            <FaWhatsapp className="hover:text-[#ffa41f]" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
