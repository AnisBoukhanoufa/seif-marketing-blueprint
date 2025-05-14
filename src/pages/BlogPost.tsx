
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { id } = useParams();
  const blogId = parseInt(id || "1");
  
  const post = blogPosts.find(post => post.id === blogId) || blogPosts[0];
  
  useEffect(() => {
    document.title = `${post.title} - Seif Marketing`;
    
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
  }, [post.title]);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 pt-32 bg-seif-purple/5 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-seif-purple opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-seif-purple-dark opacity-5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto reveal">
            <Link to="/blog" className="flex items-center text-seif-purple mb-6 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4 mb-8">
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
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
            
            <div className="h-64 md:h-96 bg-gray-100 rounded-xl mb-8"></div>
          </div>
        </section>
        
        {/* Blog Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="prose lg:prose-xl">
                <p className="lead text-xl mb-6">
                  {post.excerpt}
                </p>
                
                <h2>Understanding the Importance</h2>
                <p>
                  In today's competitive digital landscape, businesses need comprehensive strategies to stand out. 
                  This article explores how companies can leverage current trends and techniques to maximize their 
                  marketing effectiveness and drive sustainable growth.
                </p>
                
                <p>
                  Marketing is no longer just about promoting products. It's about creating meaningful connections 
                  with customers, understanding their needs, and delivering value at every touchpoint. 
                  As consumer behavior continues to evolve, so must our approach to marketing.
                </p>
                
                <h2>Key Strategies to Consider</h2>
                <p>
                  First, businesses must focus on gathering and analyzing customer data. Understanding who your 
                  customers are and what they want allows you to create targeted campaigns that resonate with 
                  your audience. Personalization has become an expectation rather than a luxury.
                </p>
                
                <p>
                  Second, omnichannel presence is critical. Your customers don't just interact with your brand 
                  through one channel. They might discover you on social media, research on your website, and 
                  make a purchase in-store. Creating a seamless experience across all channels increases 
                  customer satisfaction and loyalty.
                </p>
                
                <h2>Implementation and Results</h2>
                <p>
                  When implementing these strategies, it's important to set clear goals and KPIs. Regular 
                  monitoring and adjustment are necessary to ensure your marketing efforts are yielding the 
                  desired results. Continuous testing and optimization can significantly improve performance 
                  over time.
                </p>
                
                <p>
                  Case studies have shown that companies adopting these approaches often see increased engagement, 
                  higher conversion rates, and improved customer retention. The investment in comprehensive 
                  marketing strategies pays dividends through sustainable business growth.
                </p>
                
                <h2>Conclusion</h2>
                <p>
                  As markets continue to evolve, staying ahead requires a proactive and strategic approach to 
                  marketing. By implementing the strategies discussed in this article, businesses can build 
                  stronger relationships with their customers and achieve long-term success.
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(relatedPost => relatedPost.id !== post.id)
                    .slice(0, 2)
                    .map((relatedPost) => (
                      <Link 
                        key={relatedPost.id} 
                        to={`/blog/${relatedPost.id}`}
                        className="block group"
                      >
                        <div className="h-40 bg-gray-100 rounded-lg mb-3"></div>
                        <h4 className="font-medium group-hover:text-seif-purple transition-colors">
                          {relatedPost.title}
                        </h4>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPost;
