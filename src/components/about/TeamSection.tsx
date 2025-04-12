
import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const doctors = [
  {
    name: "Dr. Emily Richards",
    role: "Chief Medical Officer",
    specialty: "Cardiology",
    image: "/src/assets/team/doctor1.jpg",
    bio: "Dr. Richards brings over 20 years of experience in cardiology and healthcare leadership. She oversees all medical operations while maintaining an active practice treating patients with heart conditions.",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Dr. Michael Patel",
    role: "Head of Orthopedics",
    specialty: "Orthopedic Surgery",
    image: "/src/assets/team/doctor2.jpg",
    bio: "A pioneering surgeon in minimally invasive joint replacement procedures, Dr. Patel has performed over 3,000 successful surgeries and leads our orthopedic department with distinction.",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Dr. Sarah Johnson",
    role: "Director of Internal Medicine",
    specialty: "General Medicine",
    image: "/src/assets/team/doctor3.jpg",
    bio: "Dr. Johnson specializes in preventive care and managing chronic conditions. Her patient-centered approach and diagnostic expertise have made her a trusted physician in our community.",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  },
  {
    name: "Dr. James Wilson",
    role: "Lead Surgeon",
    specialty: "General Surgery",
    image: "/src/assets/team/doctor4.jpg",
    bio: "With expertise in both traditional and laparoscopic techniques, Dr. Wilson is known for his precision and commitment to patient safety throughout the surgical process.",
    social: {
      linkedin: "#",
      facebook: "#",
      instagram: "#"
    }
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader
          subtitle="Our Medical Team"
          title="Meet Our Expert Physicians"
          description="Our team of highly qualified doctors brings together decades of experience across various specialties. Each physician is committed to providing exceptional care with compassion and expertise."
          centered={true}
          className="max-w-3xl mx-auto"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {doctors.map((doctor, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Doctor Image */}
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Social Icons Overlay */}
                <div className="absolute inset-0 bg-hospital-blue/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={doctor.social.linkedin} className="text-white hover:text-gray-200 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href={doctor.social.facebook} className="text-white hover:text-gray-200 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href={doctor.social.instagram} className="text-white hover:text-gray-200 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gray-800">{doctor.name}</h3>
                <p className="text-hospital-blue font-medium mb-1">{doctor.role}</p>
                <p className="text-gray-500 text-sm mb-4">Specialty: {doctor.specialty}</p>
                <p className="text-gray-600 text-sm">{doctor.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Doctors Button */}
        <div className="text-center mt-12">
          <button className="bg-hospital-blue text-white py-3 px-8 rounded-full hover:bg-hospital-dark-blue transition-colors">
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
