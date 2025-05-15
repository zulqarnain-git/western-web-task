
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  className = "",
  hoverEffect = true
}) => {
  return (
    <div 
      className={`
        bg-white p-6 rounded-lg shadow-sm border border-gray-100
        ${hoverEffect ? 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {icon && <div className="text-western-orange mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-western-muted">{description}</p>
    </div>
  );
};

export default ServiceCard;
