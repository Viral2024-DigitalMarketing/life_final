
import React from 'react';
import { Phone, Ambulance, Hospital } from 'lucide-react';
import { Button } from "@/components/ui/button";

const EmergencySection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Emergency Contacts */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-emergency">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Emergency Contacts</h3>
              <Phone className="text-emergency" size={24} />
            </div>
            
            <ul className="space-y-4">
              <li>
                <p className="font-semibold">Emergency Hotline:</p>
                <a href="tel:+1800999911" className="text-emergency font-bold text-xl">1-800-999-911</a>
              </li>
              <li>
                <p className="font-semibold">Emergency Department:</p>
                <a href="tel:+1800123457" className="text-hospital-blue">1-800-123-457</a>
              </li>
              <li>
                <p className="font-semibold">Poison Control:</p>
                <a href="tel:+18002221222" className="text-hospital-blue">1-800-222-1222</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="w-full emergency-btn">
                Call Emergency Now
              </Button>
            </div>
          </div>
          
          {/* Ambulance Service */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-hospital-blue">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Ambulance Service</h3>
              <Ambulance className="text-hospital-blue" size={24} />
            </div>
            
            <p className="text-gray-600 mb-4">
              Our ambulance service is available 24/7 for medical emergencies. All ambulances are equipped with advanced life support equipment and staffed by certified paramedics.
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-hospital-blue rounded-full mr-2"></span>
                <span className="text-gray-600">Rapid response times</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-hospital-blue rounded-full mr-2"></span>
                <span className="text-gray-600">Certified medical professionals</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-hospital-blue rounded-full mr-2"></span>
                <span className="text-gray-600">Advanced medical equipment</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Button className="w-full bg-hospital-blue hover:bg-hospital-dark-blue">
                Request Ambulance
              </Button>
            </div>
          </div>
          
          {/* ER Information */}
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-gray-800">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-800">ER Information</h3>
              <Hospital className="text-gray-800" size={24} />
            </div>
            
            <p className="text-gray-600 mb-4">
              Our Emergency Room is open 24 hours a day, 7 days a week, providing immediate care for all medical emergencies.
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Location:</p>
                <p className="text-gray-600">First Floor, Building A</p>
              </div>
              <div>
                <p className="font-semibold">Wait Times:</p>
                <p className="text-gray-600">
                  Current ER Wait: <span className="text-emergency font-bold">15 min</span>
                </p>
                <p className="text-xs text-gray-500">(Updated hourly)</p>
              </div>
              <div>
                <p className="font-semibold">What to Bring:</p>
                <p className="text-gray-600">ID, Insurance card, Medication list</p>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="#location" 
                className="block w-full py-3 text-center font-medium bg-gray-100 hover:bg-gray-200 transition-colors rounded-md text-gray-800"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
