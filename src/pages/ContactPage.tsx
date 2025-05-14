
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Contact from "@/components/Contact";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Seif Marketing";
    
    const elements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 pt-32 bg-seif-purple/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or ready to start a project? Reach out to our team today.
            </p>
          </div>
        </section>
        
        {/* Reuse the Contact component */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
