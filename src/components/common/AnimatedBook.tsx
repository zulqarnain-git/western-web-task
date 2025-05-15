
import React, { useEffect, useState } from 'react';

interface AnimatedBookProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

const AnimatedBook: React.FC<AnimatedBookProps> = ({ imageSrc, alt, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('animated-book');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div 
      id="animated-book"
      className={`transition-all duration-1000 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'
      } ${className}`}
    >
      <img 
        src={imageSrc} 
        alt={alt} 
        className="w-full h-auto shadow-xl"
      />
    </div>
  );
};

export default AnimatedBook;
