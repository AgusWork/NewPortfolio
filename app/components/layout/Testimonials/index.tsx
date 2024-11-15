"use client"
import React from 'react';
import { motion } from 'framer-motion';

 const Testimonials = () => {
    const testimonials = [
      {
        quote: "Molfar has transformed how we handle our AI operations",
        author: "John Smith",
        role: "CTO at TechCorp",
        avatar: "/placeholder/avatar1.jpg"
      },
      {
        quote: "The best AI platform we've used in our enterprise",
        author: "Sarah Johnson",
        role: "Head of AI at InnovateX",
        avatar: "/placeholder/avatar2.jpg"
      }
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <p className="text-xl mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;