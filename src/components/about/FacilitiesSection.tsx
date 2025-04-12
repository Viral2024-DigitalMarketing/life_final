
import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';

const facilities = [
  {
    name: "State-of-the-Art Operating Theaters",
    image: "/src/assets/facilities/operating-room.jpg",
    description: "Our surgical suites are equipped with the latest technology, including robotic surgical systems and advanced monitoring equipment."
  },
  {
    name: "Advanced Imaging Center",
    image: "/src/assets/facilities/imaging-center.jpg",
    description: "Featuring MRI, CT, ultrasound, and X-ray capabilities with rapid imaging and interpretation for accurate diagnosis."
  },
  {
    name: "Specialized Rehabilitation Center",
    image: "/src/assets/facilities/rehabilitation.jpg",
    description: "A dedicated space for physical, occupational, and speech therapy with equipment designed for optimal recovery outcomes."
  },
  {
    name: "Comfortable Patient Rooms",
    image: "/src/assets/facilities/patient-room.jpg",
    description: "Private rooms designed for comfort and healing, with modern amenities and space for family members."
  },
  {
    name: "Emergency Department",
    image: "/src/assets/facilities/emergency.jpg",
    description: "24/7 emergency care with specialized trauma bays, rapid triage, and immediate access to all hospital resources."
  },
  {
    name: "Laboratory Services",
    image: "/src/assets/facilities/laboratory.jpg",
    description: "Comprehensive testing capabilities with state-of-the-art equipment for accurate, timely results."
  }
];

const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Our Facilities"
          title="Advanced Infrastructure for Exceptional Care"
          description="LIFE Hospital is equipped with cutting-edge facilities designed to provide the highest standard of medical care. Our modern infrastructure supports our medical team in delivering exceptional service to every patient."
          centered={true}
          className="max-w-3xl mx-auto"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              {/* Facility Image */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={facility.image} 
                  alt={facility.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Facility Info */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Interactive Tour CTA */}
        <div className="mt-16 bg-hospital-blue text-white p-8 md:p-12 rounded-xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Take a Virtual Tour of Our Facilities</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our hospital from the comfort of your home with our interactive virtual tour. Get a first-hand look at our modern facilities and comfortable environment.
          </p>
          <button className="bg-white text-hospital-blue py-3 px-8 rounded-full hover:bg-gray-100 transition-colors font-medium">
            Start Virtual Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
