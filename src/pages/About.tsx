import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Award, Star } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Seif Marketing";

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-seif-purple/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>

          <div className="container mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Seif Marketing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of marketing strategists, eCommerce specialists, and
              digital experts dedicated to growing your business
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="reveal" style={{ animationDelay: "0.2s" }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-seif-purple rounded-2xl opacity-10 blur-xl transform rotate-3"></div>
                  <div className="relative h-80 bg-gray-100 rounded-2xl"></div>
                </div>
              </div>

              <div
                className="space-y-6 reveal"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-gray-600">
                  At SeifMarketing, our story began with a bold idea — to help
                  brands grow with purpose and creativity. Founded by passionate
                  marketers who believe in the power of storytelling, strategy,
                  and innovation, we’re not just another agency — we’re your
                  growth partner.
                </p>
                <p className="text-gray-600">
                  What started as a vision has now become a dynamic agency that
                  blends fresh thinking with real results. We may be new, but
                  our drive runs deep. Every campaign we build, every brand we
                  touch, is fueled by curiosity, data, and a commitment to help
                  businesses stand out in a crowded world.{" "}
                </p>
                <p className="text-gray-600">
                  Whether you're just starting out or looking to scale, we’re
                  here to listen, strategize, and bring your vision to life.
                  Your success is our story — and we’re just getting started.{" "}
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
                  description:
                    "We view ourselves as an extension of your team, aligned with your goals and committed to your success.",
                  icon: <Users className="h-10 w-10 text-seif-purple" />,
                },
                {
                  title: "Results Driven",
                  description:
                    "We focus on delivering measurable outcomes and ROI, not just activities and deliverables.",
                  icon: <Trophy className="h-10 w-10 text-seif-purple" />,
                },
                {
                  title: "Innovation",
                  description:
                    "We continuously explore new strategies, technologies, and approaches to keep you ahead of the curve.",
                  icon: <Award className="h-10 w-10 text-seif-purple" />,
                },
                {
                  title: "Transparency",
                  description:
                    "We believe in open communication, clear metrics, and honest feedback throughout our relationship.",
                  icon: <Star className="h-10 w-10 text-seif-purple" />,
                },
              ].map((value, index) => (
                <Card
                  key={index}
                  className="border border-gray-100 reveal"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="mb-4">{value.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
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

export default About;
