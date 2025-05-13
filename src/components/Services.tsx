
import React, { useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, BarChart, Activity, ShoppingBag, Globe, Users, BarChart2, Megaphone } from "lucide-react";

const services = [
  {
    title: "Brand Positioning & Messaging",
    description: "Market analysis, value proposition workshops, and messaging frameworks.",
    icon: <Globe className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Competitive Audits",
    description: "SWOT analysis and benchmarking against top competitors.",
    icon: <Activity className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Website Audit & Optimization",
    description: "UX/UI recommendations, checkout flow improvements.",
    icon: <BarChart className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Platform Implementation",
    description: "Shopify, Magento, WooCommerce setup and custom integrations.",
    icon: <ShoppingBag className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Conversion Rate Optimization",
    description: "A/B testing, heat mapping, and funnel analysis.",
    icon: <LineChart className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Paid Advertising",
    description: "Google Ads, Facebook Ads, TikTok Ads targeting and budget management.",
    icon: <Megaphone className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "SEO & Content Marketing",
    description: "Keyword research, on-page SEO, blog strategy, and backlink building.",
    icon: <BarChart2 className="h-10 w-10 text-seif-purple" />
  },
  {
    title: "Social Media Management",
    description: "Content calendars, community engagement, and influencer partnerships.",
    icon: <Users className="h-10 w-10 text-seif-purple" />
  }
];

const Services = () => {
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
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 -right-20 w-72 h-72 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-80 h-80 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading mx-auto">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            We offer comprehensive marketing and eCommerce solutions to drive your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 reveal" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardHeader>
                <div className="mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
