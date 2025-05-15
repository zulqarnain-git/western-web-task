
import React from 'react';
import Layout from '../components/layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <div className="bg-western-beige py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <p className="text-western-muted text-lg mb-10 max-w-3xl">
            Get in touch with our team for inquiries, submissions, or general questions.
          </p>
        </div>
      </div>
      
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-western mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-western"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-western mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-western"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-western mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-western"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-western mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-western"
                  required
                ></textarea>
              </div>
              <div>
                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Address</h3>
                <p className="text-western-muted">
                  123 Publishing Lane<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Phone</h3>
                <p className="text-western-muted">
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-western-muted">
                  info@westernpublishinghouse.com
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Business Hours</h3>
                <p className="text-western-muted">
                  Monday - Friday: 9:00 AM - 5:00 PM<br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
