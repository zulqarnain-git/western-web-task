
import React from 'react';
import { Link } from 'react-router-dom';

// Sample author data
const featuredAuthors = [
  {
    id: 1,
    name: "Eleanor Hayes",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    bio: "Award-winning novelist and essayist known for her lyrical prose and deep character studies.",
  },
  {
    id: 2,
    name: "Marcus Chen",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    bio: "Bestselling author of historical fiction with a focus on untold stories from Asia's past.",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
    bio: "Poet and playwright whose work explores themes of identity, belonging, and cultural heritage.",
  },
];

const AuthorsSection = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Authors</h2>
          <Link to="/authors" className="text-western hover:underline uppercase text-sm font-medium tracking-wider">
            View All Authors
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredAuthors.map(author => (
            <Link to={`/authors/${author.id}`} key={author.id} className="group">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full w-48 h-48 mx-auto">
                  <img 
                    src={author.photo} 
                    alt={author.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{author.name}</h3>
                <p className="text-western-muted">{author.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorsSection;
