
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-western-beige py-16 md:py-20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight text-western">
            Publishing Exceptional Literary Works Since 1997
          </h1>
          <p className="text-western-muted text-lg md:text-xl mb-8 leading-relaxed">
            Western Publishing House is dedicated to discovering, nurturing, and promoting talented writers from around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/books" className="bg-western-blue text-white py-3 px-8 hover:bg-opacity-90 transition-colors duration-300 uppercase text-sm font-medium">
              EXPLORE OUR BOOKS
            </Link>
            <Link to="/contact" className="bg-western-orange text-white py-3 px-8 hover:bg-opacity-90 transition-colors duration-300 uppercase text-sm font-medium">
              GET STARTED TODAY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
