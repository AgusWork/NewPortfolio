"use client"

import { ReactNode } from "react";
import { motion } from "framer-motion";
import React from "react";

interface InfiniteSliderProps {
    words: string[];
    color1?: string;
    color2?: string;
    speed?: number;
    fadeCorners?: boolean;
    icon?: ReactNode;
    circleColor?: string;
    fontSize?: string;
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
    words = [],
    color1 = "text-white",
    color2 = "text-orange-500",
    speed = 25,
    fadeCorners = true,
    icon = null,
    circleColor = "bg-white",
    fontSize = "text-2xl",
}) => {
    const repeatedWords = [...words, ...words, ...words, ...words];

    return (
        <div className="relative overflow-hidden w-full" style={{ height: "100%" }}>
            {fadeCorners && (
                <>
                    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
                    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
                </>
            )}

            <motion.div
                className="flex items-center w-max h-full"
                initial={{ x: 0 }}
                animate={{ x: `-${100 / words.length}%` }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    duration: speed,
                }}
            >
                {repeatedWords.map((word, index) => (
                    <div key={index} className={`flex items-center`}>
                        <p className={`font-semibold text-lg md:${fontSize} ${index % 2 === 0 ? color1 : color2}`}>
                            {word}
                        </p>
                        {index !== repeatedWords.length - 1 && (
                            <div className={`flex items-center mx-2 md:mx-14`}>
                                {icon ? (
                                    <span className={`h-1 w-1 md:w-2 md:h-2`}>{icon}</span>
                                ) : (
                                    <div className={`h-1 w-1 md:w-2 md:h-2 rounded-full ${circleColor}`}></div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteSlider;