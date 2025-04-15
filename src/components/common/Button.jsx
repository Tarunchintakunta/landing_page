import React, { useState } from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  rounded = false,
  icon,
  active = false,
  disabled = false,
  type = 'button',
  fullWidth = false,
  ...props 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  // Handle mouse down/up for pressed effect (only for 3d variant)
  const handleMouseDown = () => {
    if (!disabled && variant === '3d') setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    if (!disabled && variant === '3d') setIsPressed(false);
  };
  
  const handleMouseLeave = () => {
    if (isPressed && variant === '3d') setIsPressed(false);
  };

  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-gray-600 hover:text-gray-800 hover:bg-gray-100',
    icon: 'bg-gray-200 hover:bg-gray-300 text-tertiary',
    '3d': `${
      (active || isPressed)
        ? 'bg-primary text-white border-primary/70 shadow-inner translate-y-0.5' 
        : 'bg-white border-primary/20 text-primary hover:bg-primary/5 shadow-md hover:shadow-lg'
    } border rounded-full transform transition-all duration-200`
  };

  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
    icon: 'p-2'
  };

  const roundedStyles = rounded ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${variant !== '3d' ? roundedStyles : ''} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
