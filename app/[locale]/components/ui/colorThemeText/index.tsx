'use client'

import React from "react";
import { useTheme } from "@/app/[locale]/components/contexts/DarkThemeContext";

interface ColorThemeTextProps {
  className: string;
  darkThemeColor?: string;
  lightThemeColor?: string;
  text: string;
}

const ColorThemeText: React.FC<ColorThemeTextProps> = ({
  className,
  darkThemeColor,
  lightThemeColor,
  text,
}) => {
  const { theme } = useTheme();

  return (
    <p className={`${className} ${theme === "dark" ? darkThemeColor : lightThemeColor}`}>
      {text}
    </p>
  );
};

export default ColorThemeText;