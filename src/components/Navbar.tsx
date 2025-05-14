
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    return location.pathname === path || (path !== "/" && location.pathname.startsWith(path));
  };

  const handleGetStarted = () => {
    window.location.href = "/contact";
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-seif-purple-dark">Seif<span className="text-seif-purple">Marketing</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "transition-colors font-medium",
                  isActive(link.href)
                    ? "text-seif-purple font-bold border-b-2 border-seif-purple"
                    : "text-gray-800 hover:text-seif-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button 
            className="bg-seif-purple hover:bg-seif-purple-dark"
            onClick={handleGetStarted}
          >
            Get Started
          </Button>
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
              <Link
                key={link.name}
                to={link.href}
                onClick={toggleMenu}
                className={cn(
                  "py-2 block transition-colors",
                  isActive(link.href)
                    ? "text-seif-purple font-bold border-l-4 border-seif-purple pl-2"
                    : "text-gray-800 hover:text-seif-purple"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              className="bg-seif-purple hover:bg-seif-purple-dark w-full mt-2"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
