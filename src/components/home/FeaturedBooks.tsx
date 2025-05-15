
import React from 'react';
import { Link } from 'react-router-dom';

// Sample book data
const featuredBooks = [
  {
    id: 1,
    title: "The Silent Echo",
    author: "Eleanor Hayes",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
    price: "$24.99",
    category: "Fiction"
  },
  {
    id: 2,
    title: "Beyond the Horizon",
    author: "Marcus Chen",
    cover: "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop",
    price: "$19.99",
    category: "Non-Fiction"
  },
  {
    id: 3,
    title: "Whispers of Dawn",
    author: "Sophia Rodriguez",
    cover: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop",
    price: "$21.99",
    category: "Poetry"
  },
  {
    id: 4,
    title: "The Forgotten Path",
    author: "Jonathan Blake",
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=1000&auto=format&fit=crop",
    price: "$23.99",
    category: "Fiction"
  },
];

const FeaturedBooks = () => {
  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-semibold">Featured Books</h2>
          <Link to="/books" className="text-western hover:underline uppercase text-sm font-medium tracking-wider">
            View All Books
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredBooks.map(book => (
            <div key={book.id} className="group">
              <Link to={`/books/${book.id}`} className="block">
                <div className="mb-4 overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title}
                    className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{book.title}</h3>
                <p className="text-western-muted mb-1">{book.author}</p>
                <p className="text-western font-medium">{book.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
