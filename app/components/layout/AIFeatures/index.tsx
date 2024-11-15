"use client"
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

 const AIFeatures = () => {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div>
              <motion.h2 
                className="text-4xl font-bold mb-6"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
              >
                Advanced AI Features for Enterprise
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600 mb-8"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Leverage the power of artificial intelligence to transform your business operations.
              </motion.p>
              <motion.ul 
                className="space-y-4"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  Natural Language Processing
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  Computer Vision Integration
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                  Predictive Analytics
                </li>
              </motion.ul>
            </div>
            <motion.div
              className="relative h-[400px] bg-gray-200 rounded-2xl"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Placeholder for interactive demo or screenshot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500">AI Demo Visualization</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  export default AIFeatures