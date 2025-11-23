import React from 'react';
import { Download } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | 'outline' | 'glow';
  className?: string;
  fullWidth?: boolean;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  fullWidth = false,
  showIcon = false,
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold transition-all duration-300 rounded-lg tracking-wider uppercase relative overflow-hidden group";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variants = {
    primary: "bg-gradient-to-r from-gaming-primary to-gaming-accent text-white hover:brightness-110 shadow-[0_0_20px_rgba(109,40,217,0.4)] hover:shadow-[0_0_30px_rgba(109,40,217,0.6)]",
    glow: "bg-white text-gaming-bg hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.3)]",
    secondary: "bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20",
    outline: "border border-gaming-secondary text-gaming-secondary hover:bg-gaming-secondary/10 shadow-[0_0_10px_rgba(14,165,233,0.2)]"
  };

  return (
    <button 
      onClick={onClick}
      className={`
        ${baseStyles} 
        ${sizeStyles[size]} 
        ${variants[variant]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
    >
      {/* Button content */}
      <span className="relative z-10 flex items-center">
        {showIcon && <Download className="w-5 h-5 mr-2 animate-bounce" />}
        {children}
      </span>
      
      {/* Hover Effect Layer */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
      )}
    </button>
  );
};

export default Button;