"use client"
import React from 'react';
import { motion } from 'framer-motion';

 const Features = () => {
    const features = [
      {
        title: "AI-Powered Analytics",
        description: "Get deep insights from your data with our advanced AI algorithms"
      },
      {
        title: "Real-time Processing",
        description: "Process and analyze data in real-time with our powerful infrastructure"
      },
      {
        title: "Enterprise Security",
        description: "Bank-grade security to keep your data safe and compliant"
      }
    ];
  
    return (
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-white rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  };


  export default Features;