// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you are using react-router-dom
//
// interface Service {
//     id: number;
//     image: string;
//     title: string;
//     tagline: string;
//     path: string; // Add a 'path' property for navigation
// }
//
// const servicesData: Service[] = [
//     {
//         id: 1,
//         image: '/images/ser.svg',
//         title: 'Orthopedic cause',
//         tagline: 'Bone, joint, muscle health and repair.',
//         path: '/joint-replacement', // Define the path for this service
//     },
//     {
//         id: 2,
//         image: '/images/ser.svg',
//         title: 'Cardiology Services',
//         tagline: 'Heart health and cardiovascular care.',
//         path: '/cardiology',
//     },
//     {
//         id: 3,
//         image: '/images/ser.svg',
//         title: 'Dermatology',
//         tagline: 'Skin, hair, and nail health.',
//         path: '/dermatology',
//     },
//     {
//         id: 4,
//         image: '/images/ser.svg',
//         title: 'Pediatrics',
//         tagline: 'Healthcare for children and adolescents.',
//         path: '/pediatrics',
//     },
//     {
//         id: 5,
//         image: '/images/ser.svg',
//         title: 'Neurology',
//         tagline: 'Brain and nervous system care.',
//         path: '/neurology',
//     },
//     {
//         id: 6,
//         image: '/images/ser.svg',
//         title: 'Ophthalmology',
//         tagline: 'Eye health and vision care.',
//         path: '/ophthalmology',
//     },
// ];
//
// interface ServicesGridProps {
//     className?: string;
//     addToContentRefs: (el: HTMLDivElement) => void;
// }
//
// const ServicesGrid: React.FC<ServicesGridProps> = ({ className = '', addToContentRefs }) => {
//     return (
//         <section className={`py-32 px-6 md:px-12 lg:px-24 bg-white ${className}`}>
//             <div className="container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
//                     {servicesData.map((service, index) => (
//                         <Link
//                             to={service.path}
//                             key={service.id}
//                             className="block" // Make the Link behave like a block-level element
//                         >
//                             <div
//                                 ref={addToContentRefs}
//                                 className="w-[592px] h-[317.33px] bg-[#EDEDF6] rounded-[40px] flex items-center justify-between p-6 relative
//                     lg:w-[592px] lg:h-[317.33px] lg:flex lg:items-center lg:justify-between lg:p-6 hover:shadow-md transition-shadow duration-300" // Added hover effect
//                                 style={{ marginLeft: index % 2 === 0 ? '0' : 'auto' }}
//                             >
//                                 <img
//                                     src={service.image}
//                                     alt={service.title}
//                                     className="w-[200px] h-[200px] object-contain"
//                                 />
//
//                                 <div className="flex flex-col justify-start max-w-[262px] ml-2 mt-[-80px] flex-grow">
//                                     <h3 className="text-3xl font-medium" style={{ fontFamily: 'Ranade', fontWeight: "500", lineHeight: '100%', letterSpacing: '-0.02em', textTransform: 'capitalize', color: '#333374' }}>
//                                         {service.title}
//                                     </h3>
//                                     <p className="mt-2 text-base" style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 400, fontSize: '16px', color:'#999999', lineHeight: '150%', letterSpacing: '-0.02em', textTransform: 'capitalize' }}>
//                                         {service.tagline}
//                                     </p>
//                                     <div className="flex justify-start mt-auto md:mt-4 lg:absolute lg:bottom-[40px] lg:right-[50px]">
//                                         <div className="w-[36px] h-[36px] bg-[#28285A] rounded-full flex items-center justify-center">
//                                             <svg
//                                                 width="14"
//                                                 height="10"
//                                                 viewBox="0 0 14 10"
//                                                 fill="none"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                             >
//                                                 <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="white" strokeWidth="2" strokeLinecap="round"
//                                                       strokeLinejoin="round"/>
//                                             </svg>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// export default ServicesGrid;