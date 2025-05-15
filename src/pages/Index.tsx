
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import FaqAccordion, { FaqItem } from '../components/common/FaqAccordion';
import InteractiveBook from '../components/common/InteractiveBook';
import ServiceSelector from '../components/common/ServiceSelector';
import AutoScrollBooks from '../components/common/AutoScrollBooks';
import AwardScroller from '../components/common/AwardScroller';
import ServiceCard from '../components/common/ServiceCard';
import InteractiveServices from '../components/common/InteractiveServices';

// Award images - Updated with reliable image URLs
const awards = [
  {
    src: "https://placehold.co/200x100/f8e71c/000000?text=Literary+Global",
    alt: "Literary Global Book Awards"
  },
  {
    src: "https://placehold.co/200x100/4a90e2/ffffff?text=NY+Times",
    alt: "New York Times Best Seller"
  },
  {
    src: "https://placehold.co/200x100/50e3c2/000000?text=Publisher+Awards",
    alt: "Independent Publisher Book Awards"
  },
  {
    src: "https://placehold.co/200x100/f5a623/ffffff?text=Kids+Book+Choice",
    alt: "Kids Book Choice Awards"
  },
  {
    src: "https://placehold.co/200x100/bd10e0/ffffff?text=Golden+Book",
    alt: "Golden Book Award"
  }
];

// Interactive services data
const publishingServices = [
  {
    id: "formatting",
    title: "Formatting",
    description: "Our expert formatting services ensure your book looks professional across all platforms. We handle both print and digital formatting to meet industry standards while maintaining your unique style and vision.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "editing",
    title: "Editing",
    description: "Our editing services include developmental editing, copyediting, and line editing to ensure your manuscript is clear, coherent, and free of errors. We maintain your voice while enhancing your writing.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "proofreading",
    title: "Proofreading",
    description: "We understand the importance of error-free content in professionally published work. Our proofreading services ensure that your manuscript is free from grammatical errors, typos, and inconsistencies while also enhancing clarity and flow.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "ghostwriting",
    title: "Ghostwriting",
    description: "Our ghostwriting services help bring your ideas to life even if you don't have the time or skill to write them yourself. We work closely with you to ensure the final product reflects your voice and vision.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "audiobook",
    title: "Audiobook",
    description: "Convert your book into a professional audiobook with our studio-quality production services. We provide talented narrators, high-quality recording, and expert editing to create an engaging listening experience.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "translation",
    title: "Translation Services",
    description: "Reach a global audience with our professional translation services. Our team of native speakers ensures your book maintains its meaning, tone, and impact across different languages and cultures.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0d07?q=80&w=800&auto=format&fit=crop"
  }
];

// Book covers for auto-scrolling
const bookCovers = [
  "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop"
];

// Analytics images for the slider
const analyticsImages = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1639322537504-6427a16b0d07?q=80&w=1000&auto=format&fit=crop",
];

// Self Publishing Services
const selfPublishingServices = [
  {
    title: "Book Cover Design",
    description: "Professional and eye-catching book covers that captivate readers' attention and effectively represent your book's content."
  },
  {
    title: "Book Editing",
    description: "Comprehensive editing services including developmental editing, copyediting, and proofreading to ensure your manuscript is polished."
  },
  {
    title: "Book Formatting",
    description: "Professional formatting for both print and digital versions, ensuring your book looks professional across all platforms."
  },
  {
    title: "Book Marketing",
    description: "Effective marketing strategies to increase your book's visibility and reach your target audience."
  },
  {
    title: "Audiobook Production",
    description: "High-quality audiobook production services to expand your audience and increase your book's accessibility."
  },
  {
    title: "Distribution Services",
    description: "Wide distribution services to make your book available on major platforms and reach readers worldwide."
  }
];

// Testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Western Publishing House helped me bring my novel to life. Their team guided me through every step of the publishing process, and their attention to detail was outstanding.",
    stars: 5
  },
  {
    name: "Michael Davis",
    text: "As a first-time author, I was nervous about self-publishing. The team at Western made it so easy and the quality of my book exceeded my expectations.",
    stars: 5
  },
  {
    name: "Emma Wilson",
    text: "Their marketing strategies helped my book reach readers I never thought possible. My sales have increased significantly since working with them.",
    stars: 4
  },
  {
    name: "David Thompson",
    text: "The editing services were exceptional. My manuscript was transformed into a polished piece of work that I'm incredibly proud of.",
    stars: 5
  },
  {
    name: "Jennifer Lopez",
    text: "From cover design to distribution, Western Publishing House provided comprehensive services that made my publishing journey smooth and successful.",
    stars: 5
  },
  {
    name: "Robert Chen",
    text: "The team's expertise and dedication to my project were evident throughout our collaboration. I'll definitely be using their services for my next book.",
    stars: 4
  }
];

// FAQ items
const faqItems: FaqItem[] = [
  {
    question: "Is my content kept confidential?",
    answer: "Yes, we prioritize confidentiality. Your ideas, documents, and all communication with our team are treated with the utmost discretion. We sign non-disclosure agreements (NDAs) to ensure your work remains private."
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

const Index = () => {
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

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-western-beige py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                Transform Your Journey with Western Publishing House!
              </h1>
              <p className="text-lg mb-8 leading-relaxed">
                At <span className="font-semibold">Western Publishing House</span>, we're your partners in turning publishing dreams into reality, guiding you every step—whether you're a new or seasoned author.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
                  Request Call Back
                </button>
                <button className="bg-western-orange text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
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

      {/* Awards Section with Auto-Scrolling - Fixed to ensure images display properly */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <h3 className="text-xl font-semibold mb-4 text-center">Award-winning Publishing Services</h3>
          <AwardScroller awards={awards} />
        </div>
      </section>

      {/* Crafting Ideas into Bestsellers Section - NEW */}
      <section className="py-16 bg-gray-50 animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-2 text-center">Crafting Ideas into Bestsellers<span className="text-western-orange">.</span></h2>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Explore our wide range of services that cater to the diverse needs of authors and individuals navigating their way through the publishing industry. Below is an overview of what we offer:
          </p>
          
          <InteractiveServices services={publishingServices} />
        </div>
      </section>

      {/* Publishing Journey Section with Auto-Scrolling Images */}
      <section className="py-16 bg-white animated-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold mb-6">The World Is Waiting for Your Masterpiece — <span className="text-western-orange">Start Your Publishing Journey Today</span></h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Start your publishing journey with Western Publishing House and witness your aspirations come to fruition. Whether fiction or non-fiction, we are here to help you share your story.
          </p>
          
          <AutoScrollBooks 
            images={bookCovers} 
            className="w-full h-auto" 
            containerClassName="h-[320px]"
            autoScrollSpeed={4000}
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50 animated-section">
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
            <button className="bg-black text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
              Request Call Back
            </button>
            <button className="bg-western-orange text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
              Chat With Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Elements - Updated with hover effects */}
      <section className="py-16 bg-white animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-2">Take the First Step on your Path to <span className="text-western-orange">Successful Self-Publishing.</span></h2>
          <p className="mb-12">
            At Western Publishing House, we understand that the self-publishing process can be challenging. That's why we offer a range of services personalized to your satisfaction to help you bring your ideas to fruition without a hassle.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {selfPublishingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section - Updated with hover effect */}
      <section className="py-16 bg-western-beige animated-section">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Connect with Us to Get Custom Quote on your Project Today!</h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300 text-sm">
                  Request Call Back
                </button>
                <button className="bg-western-orange text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 hover:-translate-y-1 transition-all duration-300 text-sm">
                  Chat With Us Now
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Publishing consultant" 
                className="rounded-full w-72 h-72 object-cover hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50 animated-section">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold mb-12">Join the Ranks of Satisfied Clients<span className="text-western-orange">.</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
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
      <section className="py-16 bg-white animated-section">
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

export default Index;
