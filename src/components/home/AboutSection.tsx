
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 bg-western-beige">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">About Western Publishing</h2>
            <p className="text-western-muted mb-4 leading-relaxed">
              Western Publishing House was founded in 1997 with a vision to discover and promote exceptional literary talent. Today, we are a leading independent publisher committed to literary excellence and innovation.
            </p>
            <p className="text-western-muted mb-6 leading-relaxed">
              Our carefully curated catalog spans fiction, non-fiction, poetry, and academic works that challenge, inspire, and entertain readers worldwide. We take pride in nurturing authors throughout their creative journey.
            </p>
            <Link to="/about" className="btn-primary inline-block">
              Learn More
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop" 
              alt="Publishing house interior" 
              className="w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1000&auto=format&fit=crop" 
              alt="Books on shelves" 
              className="w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
