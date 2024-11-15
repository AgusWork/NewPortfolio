"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

 const Navbar = () => {
  return (
    <motion.nav 
      className="w-full h-20 bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Molfar</Link>
        <div className="flex gap-8">
          <Link href="#" className="text-gray-600 hover:text-black">Products</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Solutions</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Resources</Link>
          <Link href="#" className="text-gray-600 hover:text-black">Pricing</Link>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Get Started
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;