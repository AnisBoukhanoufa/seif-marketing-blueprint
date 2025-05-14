
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Trophy, Award, Star } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Seif Marketing";
    
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
  
  const teamMembers = [
    {
      name: "Samira Amrani",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital marketing, Samira has helped hundreds of businesses transform their online presence.",
      image: "/placeholder.svg"
    },
    {
      name: "Karim Benali",
      position: "Head of Strategy",
      bio: "Former marketing director at major consumer brands, Karim specializes in brand positioning and market entry strategies.",
      image: "/placeholder.svg"
    },
    {
      name: "Leila Toumi",
      position: "eCommerce Director",
      bio: "Leila has managed successful eCommerce implementations for clients across various industries with a focus on conversion optimization.",
      image: "/placeholder.svg"
    },
    {
      name: "Omar Haddad",
      position: "Digital Campaigns Lead",
      bio: "A specialist in paid advertising across Google, Meta, and TikTok platforms with a data-driven approach to campaign management.",
      image: "/placeholder.svg"
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Seif Marketing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of marketing strategists, eCommerce specialists, and digital experts dedicated to growing your business
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal" style={{ animationDelay: '0.2s' }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-seif-purple rounded-2xl opacity-10 blur-xl transform rotate-3"></div>
                  <div className="relative h-80 bg-gray-100 rounded-2xl"></div>
                  <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                    <div className="text-3xl font-bold text-seif-purple">10+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 reveal" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                  Founded in 2015, Seif Marketing began with a simple mission: to provide businesses with strategic marketing solutions that actually deliver measurable results.
                </p>
                <p className="text-gray-600">
                  What started as a small consulting firm has grown into a full-service agency with expertise spanning brand strategy, eCommerce optimization, and digital campaign execution. Throughout our journey, we've remained true to our core values of transparency, innovation, and client partnership.
                </p>
                <p className="text-gray-600">
                  Today, we've helped over 150 businesses across Algeria and the broader MENA region transform their marketing approach and achieve sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 bg-seif-gray-light">
          <div className="container mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Client Partnership",
                  description: "We view ourselves as an extension of your team, aligned with your goals and committed to your success.",
                  icon: <Users className="h-10 w-10 text-seif-purple" />
                },
                {
                  title: "Results Driven",
                  description: "We focus on delivering measurable outcomes and ROI, not just activities and deliverables.",
                  icon: <Trophy className="h-10 w-10 text-seif-purple" />
                },
                {
                  title: "Innovation",
                  description: "We continuously explore new strategies, technologies, and approaches to keep you ahead of the curve.",
                  icon: <Award className="h-10 w-10 text-seif-purple" />
                },
                {
                  title: "Transparency",
                  description: "We believe in open communication, clear metrics, and honest feedback throughout our relationship.",
                  icon: <Star className="h-10 w-10 text-seif-purple" />
                }
              ].map((value, index) => (
                <Card key={index} className="border border-gray-100 reveal" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The experts behind our client success stories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center reveal" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="w-48 h-48 bg-gray-100 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-seif-purple mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center reveal">
              <Button className="bg-seif-purple hover:bg-seif-purple-dark">
                Join Our Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
