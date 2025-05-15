
import React, { useEffect, useRef } from 'react';

interface AwardScrollerProps {
  awards: Array<{
    src: string;
    alt: string;
  }>;
}

const AwardScroller: React.FC<AwardScrollerProps> = ({ awards }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Horizontal auto-scrolling effect
  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;
    
    // Clone awards for smooth infinite scroll
    const scrollerContent = scrollerRef.current;
    const scrollerWidth = scrollerContent.offsetWidth;
    
    let scrollPosition = 0;
    let direction = 1; // 1 for right to left, -1 for left to right
    
    const scroll = () => {
      if (!scrollerContent) return;
      
      // Update scroll position
      scrollPosition += 0.5 * direction;
      
      // Change direction when reaching edges
      if (scrollPosition > scrollerWidth / 2) {
        direction = -1;
      } else if (scrollPosition < 0) {
        direction = 1;
      }
      
      // Apply the scroll position
      scrollerContent.style.transform = `translateX(${-scrollPosition}px)`;
    };
    
    const animation = setInterval(scroll, 20);
    
    return () => {
      clearInterval(animation);
    };
  }, [awards]);
  
  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden py-4"
    >
      <div 
        ref={scrollerRef} 
        className="flex items-center justify-center gap-8 py-2 whitespace-nowrap"
      >
        {awards.map((award, index) => (
          <div key={index} className="inline-block px-2 transform hover:scale-110 transition-transform duration-300">
            <img 
              src={award.src} 
              alt={award.alt}
              className="h-16 w-auto object-contain max-w-[120px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                // Fallback to a placeholder image if the original image fails to load
                target.src = "https://placehold.co/100x60/orange/white?text=Award";
              }}
            />
          </div>
        ))}
        
        {/* Duplicate awards for smooth scrolling */}
        {awards.map((award, index) => (
          <div key={`dup-${index}`} className="inline-block px-2 transform hover:scale-110 transition-transform duration-300">
            <img 
              src={award.src} 
              alt={award.alt}
              className="h-16 w-auto object-contain max-w-[120px]"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Prevent infinite loop
                // Fallback to a placeholder image if the original image fails to load
                target.src = "https://placehold.co/100x60/orange/white?text=Award";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardScroller;
