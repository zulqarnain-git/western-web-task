
import React from 'react';
import Layout from '../components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="bg-western-beige py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-semibold mb-6">About Western Publishing</h1>
          <p className="text-western-muted text-lg mb-10 max-w-3xl">
            Discover our story, vision, and commitment to literary excellence.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-western-muted mb-4">
              Founded in 1997 by literary enthusiast Katherine Western, Western Publishing House began as a small independent press focused on publishing overlooked but exceptional literary talent.
            </p>
            <p className="text-western-muted mb-4">
              Over the past two decades, we've grown into a respected publishing house with a diverse catalog spanning fiction, non-fiction, poetry, and academic works. Throughout our growth, we've remained true to our founding principle: publishing works of exceptional quality and enduring value.
            </p>
            <p className="text-western-muted">
              Today, Western Publishing House operates from our headquarters in New York, with satellite offices in London and Sydney, connecting readers with outstanding literature from around the world.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1000&auto=format&fit=crop" 
              alt="Western Publishing office" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
          <p className="text-western-muted mb-4">
            At Western Publishing House, our mission is to discover, nurture, and promote exceptional literary talent, connecting writers with readers who appreciate thoughtful, well-crafted works that illuminate the human experience.
          </p>
          <p className="text-western-muted">
            We aim to be a publishing home where authors feel valued and supported throughout their creative journey, and where readers can trust that each title bearing our imprint represents the highest standards of literary merit and production quality.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
