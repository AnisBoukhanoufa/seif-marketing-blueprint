
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-seif-purple-dark opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Strategic Marketing Solutions for <span className="text-seif-purple">Digital Growth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg">
            Specializing in comprehensive marketing strategies and eCommerce solutions to drive your business forward.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-seif-purple hover:bg-seif-purple-dark text-white px-6 py-6">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-seif-purple text-seif-purple-dark hover:bg-seif-purple-light px-6 py-6">
              Our Services
            </Button>
          </div>
        </div>
        
        <div className="relative reveal" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 bg-seif-purple rounded-2xl opacity-10 blur-xl transform -rotate-3"></div>
          <div className="relative bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-seif-purple-light flex items-center justify-center">
                <div className="w-8 h-8 rounded-lg bg-seif-purple"></div>
              </div>
              <div className="space-y-1">
                <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                <div className="h-2 w-16 bg-gray-200 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="h-10 bg-seif-gray-light rounded-lg w-full"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-seif-purple-light rounded-lg p-4">
                  <div className="h-3 w-16 bg-seif-purple opacity-30 rounded-full mb-2"></div>
                  <div className="h-3 w-12 bg-seif-purple opacity-60 rounded-full"></div>
                </div>
                <div className="h-24 bg-seif-gray-light rounded-lg p-4">
                  <div className="h-3 w-16 bg-gray-300 rounded-full mb-2"></div>
                  <div className="h-3 w-12 bg-gray-300 rounded-full"></div>
                </div>
              </div>
              
              <div className="h-32 bg-gradient-to-r from-seif-purple-light to-seif-purple/20 rounded-lg p-4">
                <div className="flex justify-between mb-4">
                  <div className="h-3 w-20 bg-seif-purple opacity-30 rounded-full"></div>
                  <div className="h-3 w-14 bg-seif-purple opacity-30 rounded-full"></div>
                </div>
                <div className="h-12 flex items-end gap-1">
                  <div className="h-3 w-1/6 bg-seif-purple opacity-20 rounded-t-sm"></div>
                  <div className="h-6 w-1/6 bg-seif-purple opacity-30 rounded-t-sm"></div>
                  <div className="h-9 w-1/6 bg-seif-purple opacity-40 rounded-t-sm"></div>
                  <div className="h-5 w-1/6 bg-seif-purple opacity-50 rounded-t-sm"></div>
                  <div className="h-8 w-1/6 bg-seif-purple opacity-60 rounded-t-sm"></div>
                  <div className="h-12 w-1/6 bg-seif-purple opacity-70 rounded-t-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
