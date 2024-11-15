"use client"
import React from 'react';
import { CheckIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';

 const Pricing = () => {
    const plans = [
      {
        name: "Starter",
        price: "$49",
        features: [
          "Basic AI features",
          "5 team members",
          "10GB storage",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: "$99",
        features: [
          "Advanced AI features",
          "Unlimited team members",
          "100GB storage",
          "24/7 support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Custom AI solutions",
          "Dedicated account manager",
          "Unlimited storage",
          "Priority support"
        ]
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
            Flexible Pricing for Every Need
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                className={`p-8 rounded-2xl border ${
                  plan.popular ? 'border-black' : 'border-gray-200'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full ${
                    plan.popular
                      ? 'bg-black text-white'
                      : 'border border-black text-black'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Pricing;