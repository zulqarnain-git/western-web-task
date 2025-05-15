
import React, { useEffect, useState, useRef } from 'react';

interface ImageSliderProps {
  images: string[];
  interval?: number;
  className?: string;
  interactive?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 5000, className, interactive = false }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  useEffect(() => {
    if (!interactive || !sliderRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!sliderRef.current) return;
      
      const rect = sliderRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      
      // Calculate offset based on mouse position relative to center
      const newOffset = (e.clientX - centerX) / 20;
      setOffset(newOffset);
    };

    const handleMouseLeave = () => {
      setOffset(0);
    };

    document.addEventListener('mousemove', handleMouseMove);
    sliderRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (sliderRef.current) {
        sliderRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [interactive]);

  return (
    <div 
      ref={sliderRef} 
      className={`relative ${className}`} 
      style={{ perspective: '1000px' }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={interactive ? { transform: `translateX(${offset}px) rotateY(${offset/2}deg)`, transition: 'transform 0.3s ease-out' } : {}}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      ))}
      
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentImage ? 'bg-western-orange' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
