
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User } from "lucide-react";

export const blogPosts = [
  {
    id: 1,
    title: "10 Effective Strategies for eCommerce Growth in 2025",
    excerpt: "Explore the latest strategies that are helping online businesses achieve sustainable growth and higher conversion rates.",
    author: "Sarah Ahmed",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "eCommerce",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "How Brand Positioning Affects Customer Perception",
    excerpt: "Understanding the psychology behind brand positioning and how it influences how customers view your products and services.",
    author: "Mohammed El-Masri",
    date: "May 5, 2025",
    readTime: "6 min read",
    category: "Branding",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Social Media Trends That Will Dominate Next Year",
    excerpt: "Stay ahead of the curve with these emerging social media trends that will shape digital marketing strategies.",
    author: "Leila Benali",
    date: "April 28, 2025",
    readTime: "5 min read",
    category: "Social Media",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "The Role of AI in Modern Marketing Campaigns",
    excerpt: "How artificial intelligence is revolutionizing marketing automation, customer segmentation, and personalized experiences.",
    author: "Karim Tousi",
    date: "April 22, 2025",
    readTime: "10 min read",
    category: "Technology",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Measuring Marketing ROI: Beyond the Numbers",
    excerpt: "Learn how to evaluate the true impact of your marketing efforts beyond traditional metrics and KPIs.",
    author: "Sarah Ahmed",
    date: "April 15, 2025",
    readTime: "7 min read",
    category: "Analytics",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Building Customer Loyalty Through Digital Engagement",
    excerpt: "Strategies to foster long-term relationships with customers through meaningful digital interactions and experiences.",
    author: "Mohammed El-Masri",
    date: "April 10, 2025",
    readTime: "9 min read", 
    category: "Customer Experience",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Email Marketing Campaigns That Convert",
    excerpt: "Best practices for creating email campaigns that drive engagement, clicks, and ultimately conversions.",
    author: "Leila Benali",
    date: "April 5, 2025",
    readTime: "7 min read",
    category: "Email Marketing",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "The Psychology of Color in Marketing",
    excerpt: "How different colors influence consumer behavior and how to leverage color psychology in your branding.",
    author: "Karim Tousi",
    date: "March 30, 2025",
    readTime: "8 min read",
    category: "Branding",
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Voice Search Optimization for eCommerce",
    excerpt: "How to optimize your online store for the growing trend of voice search and virtual assistants.",
    author: "Sarah Ahmed",
    date: "March 25, 2025",
    readTime: "6 min read",
    category: "eCommerce",
    image: "/placeholder.svg"
  },
  {
    id: 10,
    title: "Creating Viral Content: Strategy vs. Luck",
    excerpt: "An analysis of what makes content go viral and how to increase your chances of creating shareable content.",
    author: "Mohammed El-Masri",
    date: "March 20, 2025",
    readTime: "10 min read",
    category: "Social Media",
    image: "/placeholder.svg"
  },
  {
    id: 11,
    title: "Mobile-First Marketing: Why It Matters",
    excerpt: "The importance of prioritizing mobile experiences in your marketing strategy and how to implement it effectively.",
    author: "Leila Benali",
    date: "March 15, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: "/placeholder.svg"
  },
  {
    id: 12,
    title: "Data Privacy and Marketing: Navigating the New Landscape",
    excerpt: "How to balance effective marketing with increasing privacy regulations and consumer expectations.",
    author: "Karim Tousi",
    date: "March 10, 2025",
    readTime: "9 min read",
    category: "Analytics",
    image: "/placeholder.svg"
  }
];

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  useEffect(() => {
    document.title = "Blog - Seif Marketing";
    
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
  
  useEffect(() => {
    if (activeCategory === "All Topics") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter(post => post.category === activeCategory));
    }
    setVisiblePosts(6);
  }, [activeCategory]);
  
  const handleLoadMore = () => {
    setVisiblePosts(prevVisible => prevVisible + 6);
  };
  
  const uniqueCategories = ["All Topics", ...new Set(blogPosts.map(post => post.category))];
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-seif-purple/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto text-center reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Marketing Insights & Strategies</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              Expert tips, industry trends, and proven tactics to elevate your marketing game
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {uniqueCategories.map((category, index) => (
                <Button 
                  key={index} 
                  variant={activeCategory === category ? "outline" : "outline"} 
                  className={`border-${activeCategory === category ? 'seif-purple text-seif-purple' : 'gray-200'}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Blog Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                <Card 
                  key={post.id} 
                  className="overflow-hidden border border-gray-100 hover:shadow-md transition-shadow reveal"
                  style={{ animationDelay: `${0.1 * (index % 3 + 1)}s` }}
                >
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute top-4 left-4 bg-seif-purple text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl">
                      <Link to={`/blog/${post.id}`} className="hover:text-seif-purple transition-colors">
                        {post.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {post.excerpt}
                    </CardDescription>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="link" className="text-seif-purple p-0">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {visiblePosts < filteredPosts.length && (
              <div className="mt-12 text-center">
                <Button 
                  className="bg-seif-purple hover:bg-seif-purple-dark"
                  onClick={handleLoadMore}
                >
                  Load More Articles
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
