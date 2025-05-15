
import React, { useEffect, useState, useRef } from 'react';

interface AutoScrollBooksProps {
  images: string[];
  autoScrollSpeed?: number; // in milliseconds
  className?: string;
  containerClassName?: string;
}

const AutoScrollBooks: React.FC<AutoScrollBooksProps> = ({ 
  images, 
  autoScrollSpeed = 3000, 
  className = "",
  containerClassName = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, autoScrollSpeed);
    
    return () => clearInterval(timer);
  }, [images.length, autoScrollSpeed, isHovered]);
  
  // Handle side movement effect
  useEffect(() => {
    if (!containerRef.current) return;
    
    const handleSideMovement = () => {
      if (!containerRef.current) return;

      // Calculate offset based on current time to create a smooth side-to-side effect
      const offset = Math.sin(Date.now() * 0.001) * 10;
      containerRef.current.style.transform = `translateX(${offset}px)`;
    };

    const animationFrame = requestAnimationFrame(function animate() {
      handleSideMovement();
      requestAnimationFrame(animate);
    });
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <div 
      className={`relative ${containerClassName}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        ref={containerRef}
        className="transition-transform duration-300 ease-out"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Book cover ${index + 1}`}
              className={`${className} rounded shadow-lg`}
            />
          </div>
        ))}
      </div>
      
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-western-orange' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoScrollBooks;
