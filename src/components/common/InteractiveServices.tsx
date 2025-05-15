
import React, { useState } from 'react';

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface InteractiveServicesProps {
  services: ServiceInfo[];
}

const InteractiveServices: React.FC<InteractiveServicesProps> = ({ services }) => {
  const [selectedService, setSelectedService] = useState<string>(services[0].id);

  const activeService = services.find(service => service.id === selectedService) || services[0];

  return (
    <div className="grid md:grid-cols-3 gap-8 mt-6">
      <div className="col-span-1">
        <div className="bg-white rounded-lg shadow-sm">
          {services.map((service) => (
            <div 
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`p-4 cursor-pointer border-l-4 transition-all duration-300 ${
                selectedService === service.id 
                  ? 'bg-gray-100 border-western-orange' 
                  : 'hover:bg-gray-50 border-transparent'
              }`}
            >
              <h3 className="font-medium">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="col-span-2">
        <div className="grid md:grid-cols-2 gap-6 h-full">
          <div>
            <img 
              src={activeService.image} 
              alt={activeService.title} 
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{activeService.title}<span className="text-western-orange">.</span></h3>
            <p className="text-western-muted">{activeService.description}</p>
            
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
      </div>
    </div>
  );
};

export default InteractiveServices;
