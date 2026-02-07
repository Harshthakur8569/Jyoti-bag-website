import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { contactInfo, categories } from "../data/mockData";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src="/images/logo.jpg"
                alt="Jyoti Bag Manufacturer Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Jyoti Bag Manufacturer is a trusted Indian manufacturer
              specializing in high-quality PVC and non-woven packaging bags,
              delivering customized and bulk solutions with reliable All-India
              service.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                GST Verified
              </div>
              <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                Udyam Certified
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/customize"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  Customize Your Bag
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm hover:text-red-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2">
              {categories.slice(1).map((category, index) => (
                <li key={index}>
                  <Link
                    to="/products"
                    className="text-sm hover:text-red-400 transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-sm hover:text-red-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm hover:text-red-400 transition-colors break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm leading-relaxed">
                    {contactInfo.address}
                  </p>
                </div>
              </li>
              {/* IndiaMART Link */}
             <li className="flex items-start space-x-3">
                <ExternalLink
                  size={16}
                  className="text-red-400 mt-1 flex-shrink-0"/>
                <div>
                  <a
                    href="https://www.indiamart.com/jyoti-bagmanufacturer/?srsltid=AfmBOoq5QPm5K8UGqfFb07hmQyczjOtRYJG2Zy9zY0DW14uDnX_ZFawX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-red-400 transition-colors break-all">
                    Visit us on IndiaMART
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-gray-500">
                {contactInfo.businessHours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} JYOTI BAG MANUFACTURER. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>GST: {contactInfo.gstNumber}</span>
              <span>•</span>
              <span>Udyam: {contactInfo.udyamNumber}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;