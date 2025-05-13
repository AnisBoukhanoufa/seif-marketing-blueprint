
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Metrics", href: "#metrics" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-seif-purple-dark">Seif<span className="text-seif-purple">Marketing</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-seif-purple transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button className="bg-seif-purple hover:bg-seif-purple-dark">Get Started</Button>
        </div>

        {/* Mobile menu button */}
        <Button
          onClick={toggleMenu}
          variant="ghost"
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-6 z-50">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-gray-800 hover:text-seif-purple py-2 block transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button className="bg-seif-purple hover:bg-seif-purple-dark w-full mt-2">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
