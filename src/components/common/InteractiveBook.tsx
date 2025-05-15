
import React, { useEffect, useRef, useState } from 'react';

interface InteractiveBookProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

const InteractiveBook: React.FC<InteractiveBookProps> = ({ imageSrc, alt, className = "" }) => {
  const bookRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    transform: 'rotateY(0deg) rotateX(0deg)',
    transition: 'transform 0.3s ease-out'
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bookRef.current) return;
      
      const bookRect = bookRef.current.getBoundingClientRect();
      const bookCenterX = bookRect.left + bookRect.width / 2;
      const bookCenterY = bookRect.top + bookRect.height / 2;
      
      // Calculate rotation angles based on mouse position
      const rotateY = ((e.clientX - bookCenterX) / 20);
      const rotateX = ((bookCenterY - e.clientY) / 20);
      
      setStyle({
        transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        transition: 'transform 0.3s ease-out'
      });
    };
    
    const handleMouseLeave = () => {
      setStyle({
        transform: 'rotateY(0deg) rotateX(0deg)',
        transition: 'transform 0.5s ease'
      });
    };
    
    // Add float animation automatically
    const floatInterval = setInterval(() => {
      if (bookRef.current && !bookRef.current.matches(':hover')) {
        setStyle(prevStyle => {
          const currentY = parseFloat(prevStyle.transform.split('rotateX(')[1]?.split('deg)')[0] || '0');
          const newY = currentY === 0 ? 5 : 0;
          
          return {
            transform: `rotateY(0deg) rotateX(${newY}deg)`,
            transition: 'transform 2s ease-in-out'
          };
        });
      }
    }, 2000);
    
    document.addEventListener('mousemove', handleMouseMove);
    if (bookRef.current) {
      bookRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (bookRef.current) {
        bookRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      clearInterval(floatInterval);
    };
  }, []);
  
  return (
    <div 
      ref={bookRef} 
      className={`${className} relative`}
      style={{ perspective: '1000px' }}
    >
      <div style={style} className="book-container">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-auto shadow-xl rounded-md"
        />
      </div>
    </div>
  );
};

export default InteractiveBook;
