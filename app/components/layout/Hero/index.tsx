"use client"
import React from 'react';
import { motion } from 'framer-motion';

 const Hero = () => {
    return (
      <motion.div 
        className="pt-40 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            className="text-7xl font-bold text-center mb-8"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Unlock the Power of AI
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Transform your business with our advanced AI solutions. 
            Built for enterprises, designed for everyone.
          </motion.p>
          <motion.div 
            className="flex justify-center gap-4"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-black text-white px-8 py-3 rounded-full">
              Start Free Trial
            </button>
            <button className="border border-black px-8 py-3 rounded-full">
              Watch Demo
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  
  export default Hero;