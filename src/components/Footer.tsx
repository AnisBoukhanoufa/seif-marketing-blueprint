
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold text-seif-purple-dark">Seif<span className="text-seif-purple">Marketing</span></span>
            </Link>
            <p className="text-gray-600 mb-6">
              A specialized marketing agency focusing on comprehensive marketing strategies and eCommerce solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">Brand Positioning</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">eCommerce Optimization</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">Paid Advertising</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">SEO & Content Marketing</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">Social Media Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-seif-purple transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-seif-purple transition-colors">Blog</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-seif-purple transition-colors">Case Studies</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-seif-purple transition-colors">Contact</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-seif-purple transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Seif Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors text-sm">LinkedIn</Link>
            <Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors text-sm">Twitter</Link>
            <Link to="/" className="text-gray-600 hover:text-seif-purple transition-colors text-sm">Instagram</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
