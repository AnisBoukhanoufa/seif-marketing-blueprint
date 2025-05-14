
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ServicesPage = () => {
  useEffect(() => {
    document.title = "Services - Seif Marketing";
    
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
  
  const handleGetStarted = () => {
    toast({
      title: "Package Selected!",
      description: "Thank you for your interest. Our team will contact you shortly.",
    });
  };
  
  const packages = [
    {
      title: "Starter Package",
      price: "3,500",
      description: "Perfect for small businesses just getting started with digital marketing",
      features: [
        "Brand positioning workshop",
        "Website audit & recommendations",
        "Basic SEO setup",
        "Social media profile optimization",
        "Monthly performance report"
      ]
    },
    {
      title: "Growth Package",
      price: "7,500",
      description: "Comprehensive marketing solution for established businesses looking to scale",
      features: [
        "Everything in Starter Package",
        "Competitor analysis & benchmarking",
        "Paid advertising campaigns (Google & Meta)",
        "Content marketing strategy",
        "Conversion rate optimization",
        "Bi-weekly performance reports"
      ],
      highlighted: true
    },
    {
      title: "Enterprise Package",
      price: "12,000",
      description: "Full-service marketing suite for large businesses with complex needs",
      features: [
        "Everything in Growth Package",
        "Multi-channel campaign management",
        "eCommerce platform optimization",
        "Custom analytics dashboard",
        "International market strategy",
        "Weekly strategy calls",
        "Dedicated account manager"
      ]
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-seif-purple/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive marketing solutions tailored to your business needs
            </p>
          </div>
        </section>
        
        {/* Reuse the Services component */}
        <Services />
        
        {/* Service Packages */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold mb-4">Our Service Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and goals
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className={`border ${pkg.highlighted ? 'border-seif-purple shadow-lg relative' : 'border-gray-200'} reveal flex flex-col`} 
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  {pkg.highlighted && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-seif-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{pkg.title}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-3xl font-bold">${pkg.price}</span>
                      <span className="text-gray-500">/month</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-seif-purple flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button 
                      className={`w-full ${pkg.highlighted ? 'bg-seif-purple hover:bg-seif-purple-dark' : 'bg-gray-800 hover:bg-gray-700'}`}
                      onClick={handleGetStarted}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ServicesPage;
