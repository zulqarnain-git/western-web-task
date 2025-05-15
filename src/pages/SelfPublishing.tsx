
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import FaqAccordion, { FaqItem } from '../components/common/FaqAccordion';
import InteractiveBook from '../components/common/InteractiveBook';
import ServiceSelector from '../components/common/ServiceSelector';
import AutoScrollBooks from '../components/common/AutoScrollBooks';
import ServiceCard from '../components/common/ServiceCard';

// Book covers for auto-scrolling
const bookCovers = [
  "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
];

const SelfPublishing = () => {
  // Add animation to sections when they come into view
  useEffect(() => {
    const animatedSections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-fade-in');
        }
      });
    }, { threshold: 0.1 });
    
    animatedSections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      animatedSections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Services offered in self-publishing
  const services = [
    {
      title: "Ghostwriting",
      description: "Transform your ideas into fascinating stories that will engage readers and leave them wanting more."
    },
    {
      title: "Publishing and Marketing Strategy",
      description: "Refine your manuscript for clarity, consistency, coherence, and influence while preserving your distinctive voice."
    },
    {
      title: "Audiobook",
      description: "Reach segments that might prefer listening over reading through our professional narration."
    },
    {
      title: "Book Marketing",
      description: "Promote your book effectively to reach your target audience and maximize sales potential."
    },
    {
      title: "Illustration",
      description: "Enhance your book with custom illustrations that bring your story to life visually."
    },
    {
      title: "Publishing Navigation",
      description: "Expert guidance through the complex publishing landscape to ensure optimal outcomes."
    }
  ];

  // Service details for the service selector component
  const serviceDetails = [
    {
      title: "Ghostwriting",
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?q=80&w=1000&auto=format&fit=crop",
      description: "We've helped hundreds of authors bring their ideas to life through our ghostwriting proficiency. Whether you need assistance with developing a plot, creating charming characters, or writing dialogue that leaves your readers moved, we have the skills to deliver a powerful manuscript that reflects your unique voice."
    },
    {
      title: "Publishing and Marketing Strategy",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      description: "Refine your manuscript for clarity, consistency, coherence, and influence while preserving your distinctive voice. Our marketing strategies will help your book reach its target audience and maximize its sales potential."
    },
    {
      title: "Audiobook",
      image: "https://images.unsplash.com/photo-1585314062604-1a357de8b000?q=80&w=1000&auto=format&fit=crop",
      description: "In a rapidly growing digital world, some readers often prefer to listen rather than read, and we're here to help you reach them. Let's bring your book to life in a way that attracts and holds the interest of listeners while ensuring your story's essence remains intact."
    },
    {
      title: "Book Marketing",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
      description: "Our comprehensive marketing strategies will help your book reach its target audience and maximize its sales potential. From social media campaigns to book launch events, we'll create a custom marketing plan tailored to your book's genre and target readers."
    },
    {
      title: "Illustration",
      image: "https://images.unsplash.com/photo-1594377157609-c04a7ff9bc21?q=80&w=1000&auto=format&fit=crop",
      description: "Add eye-catching visual elements to complement your story and captivate your readers. Our professional illustrators will work closely with you to bring your vision to life, whether you're publishing a children's book, a graphic novel, or simply want to enhance your text with visual elements."
    },
    {
      title: "Book Printing",
      image: "https://images.unsplash.com/photo-1501246028772-21cfa35c7c96?q=80&w=1000&auto=format&fit=crop",
      description: "Turn your manuscript into a physical book with high-quality print that reflects your vision. We offer various formats, paper types, and binding options to ensure your book looks and feels exactly as you envisioned."
    },
    {
      title: "Book Translation",
      image: "https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?q=80&w=1000&auto=format&fit=crop",
      description: "Expand your reach to international audiences with professional book translation. We'll help ensure your story is accessible to readers around the world while preserving your unique style and voice."
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Harvey Perkins",
      stars: 5,
      text: "The book marketing services are a game-changer! Western Publishing House helped me set up an amazing campaign that brought my book to the attention of thousands of readers. I've seen incredible sales and reviews ever since!"
    },
    {
      name: "David Davies",
      stars: 5,
      text: "I was blown away by the professionalism and attention to detail throughout the entire publishing process. The team at Western Publishing made my dream come true!"
    },
    {
      name: "Owen Welch",
      stars: 5,
      text: "Cheryl guided me through the audiobook creation process, and I couldn't be happier. She helped me find the perfect narrator, and the final product was better than I ever imagined. It's now my favorite version of my own book!"
    }
  ];

  // FAQ items
  const faqItems: FaqItem[] = [
    {
      question: "Is my content kept confidential?",
      answer: "Absolutely. All information shared with Western Publishing House is strictly confidential. We respect your intellectual property and never share your content without explicit permission."
    },
    {
      question: "What genres do you cover?",
      answer: "We cover a wide range of genres including fiction, non-fiction, memoirs, self-help, business books, children's books, and academic works. Our team of experienced writers specializes in various fields to ensure quality across all genres."
    },
    {
      question: "How do you ensure the writing matches my voice?",
      answer: "Our process begins with in-depth interviews and questionnaires to understand your unique voice, style, and vision. We provide multiple rounds of revisions, working closely with you to refine the content until it authentically reflects your voice and meets your expectations."
    },
    {
      question: "What is the turnaround time for ghostwriting projects?",
      answer: "Turnaround times vary based on project length and complexity. A standard book (50,000-70,000 words) typically takes 3-6 months from start to finish. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
    },
    {
      question: "What are the pricing options for ghostwriting?",
      answer: "Our pricing is customized based on your project's scope, complexity, research requirements, and timeline. We offer flexible payment plans spread throughout the project. Contact us for a personalized quote tailored to your specific needs."
    }
  ];

  // Analytics images
  const analyticsImages = [
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537504-6427a16b0d07?q=80&w=1000&auto=format&fit=crop",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-western-beige py-20 animated-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                Transform Your Journey with Western Publishing House!
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                At Western Publishing House, we're your partners in turning publishing dreams into reality, guiding you every step—whether you're a new or seasoned author.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="western-button-black">
                  Request Call Back
                </button>
                <button className="western-button-orange">
                  Chat With Us Now
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-center">Ready to Publish?</h2>
                <h3 className="text-xl mb-6 text-center">Get Up to 40% Off – Sign Up To Get Started.</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 border border-gray-300"
                    required
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-gray-300"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full px-4 py-3 border border-gray-300"
                    required
                  />
                  <textarea
                    placeholder="I am looking for..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300"
                    required
                  ></textarea>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      className="mt-1 mr-2"
                      required
                    />
                    <p className="text-sm">
                      Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL (PRIVACY POLICY & TERM & CONDITIONS) - Carrier charges may apply for SMS.
                    </p>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-black text-white py-3 hover:bg-opacity-90 transition-colors duration-300"
                  >
                    Let's Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-6">What We Offer:</h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <span className="text-western-green mr-2">•</span>
              <span>Customized Publishing Plans</span>
            </li>
            <li className="flex items-start">
              <span className="text-western-green mr-2">•</span>
              <span>Author-Centric Approach</span>
            </li>
            <li className="flex items-start">
              <span className="text-western-green mr-2">•</span>
              <span>Royalty Management</span>
            </li>
            <li className="flex items-start">
              <span className="text-western-green mr-2">•</span>
              <span>Global Distribution</span>
            </li>
            <li className="flex items-start">
              <span className="text-western-green mr-2">•</span>
              <span>Print-on-Demand Services</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <button className="western-button-black">
              Request Call Back
            </button>
            <button className="western-button-orange">
              Chat With Us Now
            </button>
          </div>
          <div className="mt-8">
            <div className="flex items-center">
              <span className="text-lg font-medium mr-2">Excellent</span>
              <div className="flex text-western-green">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="text-sm ml-2">Reviews on Trustpilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Journey Section */}
      <section className="py-16 bg-gray-50 animated-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold mb-6">The World Is Waiting for Your Masterpiece — <span className="text-western-orange">Start Your Publishing Journey Today</span></h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Start your publishing journey with Western Publishing House and witness your aspirations come to fruition. Whether fiction or non-fiction, we are here to help you share your story.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {analyticsImages.map((image, index) => (
              <div key={index} className={`relative h-[220px] rounded-lg overflow-hidden shadow-lg ${index === 0 ? 'md:col-span-2' : ''}`}>
                <img 
                  src={image} 
                  alt={`Publishing analytics ${index + 1}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-12">Why Choose Us<span className="text-western-orange">.</span></h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="text-western-orange mr-2">•</span>
                  Expert Guidance
                </h3>
                <p className="text-western-muted">
                  Receive invaluable guidance from experienced writers and editors.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="text-western-orange mr-2">•</span>
                  Thriving Community
                </h3>
                <p className="text-western-muted">
                  Connect with passionate personalities from the literary community for growth and inspiration.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="text-western-orange mr-2">•</span>
                  Personalized Support
                </h3>
                <p className="text-western-muted">
                  Receive tailored support to fast-track your journey as an author or editor.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center">
                  <span className="text-western-orange mr-2">•</span>
                  Unlock your Potential
                </h3>
                <p className="text-western-muted">
                  Receive resources and avenues to showcase your literary talent.
                </p>
              </div>
            </div>
            
            <div>
              <InteractiveBook 
                imageSrc="https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1000&auto=format&fit=crop" 
                alt="Book cover"
                className="max-w-md mx-auto"
              />
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="western-button-black">
              Request Call Back
            </button>
            <button className="western-button-orange">
              Chat With Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Elements */}
      <section className="py-16 bg-gray-50 animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-2">Take the First Step on your Path to <span className="text-western-orange">Successful Self-Publishing.</span></h2>
          <p className="mb-12">
            At Western Publishing House, we understand that the self-publishing process can be challenging. That's why we offer a range of services personalized to your satisfaction to help you bring your ideas to fruition without a hassle.
          </p>
          
          <div className="mb-12">
            <ServiceSelector services={serviceDetails} />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <AutoScrollBooks 
                images={bookCovers} 
                className="w-full h-auto" 
                containerClassName="h-[320px]"
                autoScrollSpeed={4000}
              />
            </div>
            
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                className="service-item"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-western-beige animated-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Connect with Us to Get Custom Quote on your Project Today!</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="western-button-black">
                  Request Call Back
                </button>
                <button className="western-button-orange">
                  Chat With Us Now
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Publishing consultant" 
                className="rounded-full w-72 h-72 object-cover animate-fade-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audiobook Section */}
      <section className="py-16 bg-white animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-6">Audiobook Production<span className="text-western-orange">.</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6">
                In a rapidly growing digital world, some readers often prefer to listen rather than read, and we're here to help you reach them. Let's bring your book to life in a way that attracts and holds the interest of listeners while ensuring your story's essence remains intact.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-western-orange mr-2">•</span>
                  <span>Professional narrators breathe life into your narrative, delivering engaging performances.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-western-orange mr-2">•</span>
                  <span>Cutting-edge technology for top-tier audio quality.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-western-orange mr-2">•</span>
                  <span>Customized sound effects enrich the listening experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-western-orange mr-2">•</span>
                  <span>Get your audiobook on the right platforms for a wide audience reach.</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="western-button-black">
                  Request Call Back
                </button>
                <button className="western-button-orange">
                  Chat With Us Now
                </button>
              </div>
            </div>
            <div>
              <InteractiveBook 
                imageSrc="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000&auto=format&fit=crop" 
                alt="Audiobook production"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-12">Join the Ranks of Satisfied Clients<span className="text-western-orange">.</span></h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <div className="flex text-western-orange mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{testimonial.name}</h3>
                <p className="text-western-muted">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-12 text-center">Frequently Asked Questions<span className="text-western-orange">.</span></h2>
          
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-western-beige animated-section">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Become A Star in The Literary Sphere?</h2>
            <p className="text-lg mb-6">
              Let's connect and get your name gracing the bestseller lists. Have questions or need more information? Feel free to reach out to us at <span className="font-semibold">+1-860-764-8454</span>.
            </p>
            
            <form className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full px-4 py-3 border border-gray-300" 
                  required
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 border border-gray-300" 
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <select 
                  className="w-full px-4 py-3 border border-gray-300" 
                  required
                >
                  <option value="">Select Services</option>
                  <option value="self-publishing">Self Publishing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="audiobook">Audiobook Services</option>
                  <option value="illustration">Book Illustration</option>
                  <option value="cover-design">Book Cover Design</option>
                </select>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300" 
                  required
                />
              </div>
              
              <textarea 
                placeholder="About Project" 
                className="w-full px-4 py-3 border border-gray-300 mb-4" 
                rows={4}
                required
              ></textarea>
              
              <div className="flex items-start mb-6">
                <input 
                  type="checkbox" 
                  className="mt-1 mr-2"
                  required
                />
                <p className="text-sm">
                  Please CHECK THE BOX to COMMUNICATE VIA SMS OR EMAIL ( PRIVACY POLICY & TERM & CONDITIONS ) - Carrier charges may apply for SMS. Reply STOP or UNSUBSCRIBE to STOP to unsubscribe anytime.
                </p>
              </div>
              
              <button 
                type="submit"
                className="bg-black text-white py-3 px-8 hover:bg-opacity-90 transition-colors duration-300 inline-block"
              >
                Let's Get Started
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SelfPublishing;
