
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const aboutItems = [
  "Strategic planning for brand positioning and market entry",
  "eCommerce growth and optimization strategies",
  "Digital campaign execution and performance tracking",
  "Client onboarding, reporting, and support processes",
  "Comprehensive analytics and data-driven insights"
];

const About = () => {
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
    <section id="about" className="py-20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-heading">About Seif Marketing</h2>
            <p className="text-lg text-gray-600">
              Seif Marketing is a specialized marketing agency focusing on comprehensive marketing strategies and eCommerce solutions for businesses of all sizes.
            </p>
            <p className="text-gray-600">
              Our purpose is to define and communicate the range of marketing and eCommerce strategy services, while aligning internal teams with expectations, deliverables, and success metrics for client engagements.
            </p>
            
            <div className="space-y-3 pt-4">
              {aboutItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-seif-purple h-6 w-6 flex-shrink-0 mt-0.5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <Button className="bg-seif-purple hover:bg-seif-purple-dark mt-4">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-4">
              <div className="bg-seif-purple/10 rounded-2xl h-64 p-6 flex flex-col justify-end">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-4xl font-bold text-seif-purple mb-2">10+</div>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
              </div>
              <div className="bg-seif-gray-light rounded-2xl h-40"></div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="bg-seif-gray-light rounded-2xl h-40"></div>
              <div className="bg-seif-purple/20 rounded-2xl h-64 p-6 flex flex-col justify-end">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <div className="text-4xl font-bold text-seif-purple mb-2">150+</div>
                  <p className="text-gray-700">Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
