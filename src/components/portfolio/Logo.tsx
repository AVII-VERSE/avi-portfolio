import React from "react";
import logoSvg from "@/assets/logo.svg";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className, size = "md" }) => {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14 sm:w-16 sm:h-16",
    lg: "w-18 h-18 sm:w-20 sm:h-20",
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden transition-all duration-300 hover:scale-105",
        sizeClasses[size],
        className
      )}
    >
      <img
        src={logoSvg}
        alt="Avinash Singh Logo"
        className="w-full h-full object-contain scale-110"
      />
    </div>
  );
};

export default Logo;