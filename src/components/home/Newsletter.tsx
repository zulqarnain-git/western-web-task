
import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 bg-western-beige">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
          <p className="text-western-muted mb-8">
            Stay updated with our latest releases, author events, and exclusive offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 focus:outline-none border border-gray-300"
              required
            />
            <button 
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
