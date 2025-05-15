
import React from 'react';
import Layout from '../components/layout/Layout';

const Authors = () => {
  return (
    <Layout>
      <div className="container-custom py-20">
        <h1 className="text-4xl font-semibold mb-8">Our Authors</h1>
        <p className="text-western-muted text-lg mb-10">
          Meet the talented writers behind our exceptional literary works.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Authors will be displayed here */}
          <div className="text-center pt-10 pb-20">
            <p className="text-western-muted">
              Coming soon! Our complete author directory.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Authors;
