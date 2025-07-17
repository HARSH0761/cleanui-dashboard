import React from 'react';

const Button = ({ children, variant = 'primary' }) => {
  const base = 'px-4 py-2 font-semibold rounded-lg';
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
    secondary: 'bg-purple-600 text-white hover:bg-purple-700',
  };

  return <button className={`${base} ${variants[variant]}`}>{children}</button>;
};

export default Button;
