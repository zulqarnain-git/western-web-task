
import React from 'react';
import Layout from '../components/layout/Layout';

const Books = () => {
  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-4xl font-semibold mb-8">Our Books</h1>
        <p className="text-western-muted text-lg mb-10">
          Explore our collection of exceptional literary works across various genres.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Book catalog will be displayed here */}
          <div className="text-center pt-10 pb-20">
            <p className="text-western-muted">
              Coming soon! Our complete book catalog.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Books;
