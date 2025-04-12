
import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  subtitle, 
  title, 
  description, 
  centered = false,
  className = ""
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center mx-auto' : ''} ${className}`}>
      {subtitle && (
        <p className="section-subtitle">{subtitle}</p>
      )}
      <h2 className="section-title">{title}</h2>
      {description && (
        <p className="text-gray-600 max-w-3xl mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
