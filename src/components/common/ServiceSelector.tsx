
import React, { useState } from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  active?: boolean;
}

interface ServiceSelectorProps {
  services: ServiceItem[];
}

const ServiceSelector: React.FC<ServiceSelectorProps> = ({ services }) => {
  const [activeService, setActiveService] = useState(services[0]?.title || '');
  
  const activeServiceData = services.find(service => service.title === activeService);
  
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="col-span-1">
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 gap-3 text-left">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`p-3 cursor-pointer transition-all duration-300 ${
                  service.title === activeService 
                    ? 'bg-gray-100 border-l-4 border-western-orange' 
                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                }`}
                onClick={() => setActiveService(service.title)}
              >
                <h3 className="font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="col-span-2">
        {activeServiceData && (
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src={activeServiceData.image} 
                alt={activeServiceData.title} 
                className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{activeServiceData.title}<span className="text-western-orange">.</span></h3>
              <p className="text-western-muted">{activeServiceData.description}</p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-black text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
                  Request Call Back
                </button>
                <button className="bg-western-orange text-white py-3 px-6 rounded-3xl hover:bg-opacity-90 transition-colors duration-300 text-sm">
                  Chat With Us Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelector;
