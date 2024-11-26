import React from 'react';

const ServicesSection = () => (
  <div className="py-16 px-8 bg-white">
    <h2 className="text-3xl font-semibold text-center mb-8">Services we offer</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: 'Production', description: 'Id nisl lacus penatibus bibendum vitae lectus et a.' },
        { title: 'Distribution', description: 'Lorem nulla nulla nulla faucibus amet feugiat ultricies.' },
        { title: 'Subcontracting', description: 'Posuere arcu enim lorem nulla nulla faucibus amet.' },
      ].map((service, index) => (
        <div key={index} className="p-6 shadow-lg rounded-lg text-center bg-gray-50">
          <h3 className="text-xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ServicesSection;
