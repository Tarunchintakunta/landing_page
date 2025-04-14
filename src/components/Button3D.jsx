// src/components/Button3D.jsx
import React, { useState } from 'react';

const Button3D = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  size = 'md', 
  active = false, 
  icon = null,
  disabled = false,
  type = 'button',
  fullWidth = false
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  // Handle mouse down/up for pressed effect
  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    if (!disabled) setIsPressed(false);
  };
  
  const handleMouseLeave = () => {
    if (isPressed) setIsPressed(false);
  };
  
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) onClick(e);
  };

  // Determine which color scheme to use based on variant
  const getColors = () => {
    if (disabled) {
      return 'bg-gray-200 text-gray-400 border-gray-200 cursor-not-allowed';
    }
    
    switch (variant) {
      case 'primary':
        return (active || isPressed)
          ? 'bg-black text-white border-gray-700 shadow-black/30' 
          : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100';
      case 'secondary':
        return (active || isPressed)
          ? 'bg-gray-800 text-white border-gray-700 shadow-black/30' 
          : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50';
      case 'accent':
        return (active || isPressed)
          ? 'bg-primary text-white border-primary/70 shadow-primary/30' 
          : 'bg-white border-primary/20 text-primary hover:bg-primary/5';
      default:
        return (active || isPressed)
          ? 'bg-black text-white border-gray-700 shadow-black/30' 
          : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-gray-100';
    }
  };

  // Determine size classes
  const getSizeClasses = () => {
    switch (size) {
      case 'sm': return 'text-sm px-4 py-2';
      case 'lg': return 'text-lg px-8 py-4';
      case 'icon': return 'p-3';
      default: return 'px-6 py-3'; // md size
    }
  };

  // Combined classes for the button
  const buttonClasses = `
    ${getColors()}
    ${getSizeClasses()}
    ${className}
    ${fullWidth ? 'w-full' : ''}
    font-medium
    rounded-full
    border
    transform
    transition-all
    duration-200
    ${(active || isPressed) ? 'shadow-inner translate-y-0.5' : 'shadow-md hover:shadow-lg'}
    flex
    items-center
    justify-center
    gap-2
  `.trim();

  return (
    <button 
      type={type}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
      className={buttonClasses}
      aria-pressed={active || isPressed}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

export default Button3D;