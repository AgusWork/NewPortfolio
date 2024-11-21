"use client"
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Code, Palette, Zap } from 'lucide-react';

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
      <div className="py-20 ">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Code className="text-teal-500 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Clean Code</h3>
              <p className="text-muted-foreground">I write clean, maintainable, and efficient code that scales with your project.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Palette className="text-yellow-400 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Creative Design</h3>
              <p className="text-muted-foreground">I create visually stunning designs that capture your brand's essence.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <Zap className="text-purple-500 h-12 w-12 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-muted-foreground">I optimize for speed to ensure your website loads quickly and runs smoothly.</p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  export default Features;