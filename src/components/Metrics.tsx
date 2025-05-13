
import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "Client Acquisition Rate",
    description: "Number of new clients per quarter",
    value: "25+",
    trend: "+15%"
  },
  {
    title: "eCommerce Revenue Growth",
    description: "Average increase in online sales",
    value: "47%",
    trend: "+12%"
  },
  {
    title: "Campaign ROI",
    description: "Revenue generated per dollar spent",
    value: "3.8x",
    trend: "+0.6x"
  },
  {
    title: "Client Satisfaction (NPS)",
    description: "Net Promoter Score tracking",
    value: "85",
    trend: "+7"
  }
];

const testimonials = [
  {
    quote: "Seif Marketing transformed our online presence and doubled our eCommerce sales within just six months.",
    author: "Sarah Ahmed",
    position: "CEO, Fashion Retailer"
  },
  {
    quote: "Their strategic approach to digital marketing helped us enter three new markets with immediate traction.",
    author: "Mohammed El-Masri",
    position: "Marketing Director, Tech Startup"
  }
];

const Metrics = () => {
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
    <section id="metrics" className="py-20 bg-seif-gray-light overflow-hidden">
      <div className="container">
        <div className="text-center mb-16 reveal">
          <h2 className="section-heading mx-auto">Success Metrics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            We measure our success by the results we deliver for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card 
              key={index}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 reveal"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium text-gray-700 mb-2">{metric.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{metric.description}</p>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold text-seif-purple">{metric.value}</span>
                  <span className="text-green-500 text-sm font-medium">{metric.trend}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8 reveal">Client Testimonials</h3>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 reveal"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="flex gap-4">
                <div className="text-5xl text-seif-purple opacity-30">"</div>
                <div>
                  <p className="text-lg italic text-gray-700 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
