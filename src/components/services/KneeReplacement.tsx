// // KneeReplacement.tsx
// import React from 'react';
// import Navbar from '@/components/layout/Navbar';
// import Footer from '@/components/layout/Footer';
// import PageHero from '@/components/shared/PageHero';
// import ServiceDetailTemplate from '@/components/services/ServiceDetailTemplate';
// import FaqSection from '@/components/home/FaqSection.tsx';
//
// const KneeReplacement = () => {
//     const serviceInfo = {
//         title: "Knee Replacement Surgery",
//         subtitle: "Joint Replacement",
//         description:
//             "Knee replacement surgery is a procedure that can help relieve pain and restore function in severely diseased knee joints. During the procedure, the surgeon cuts away damaged bone and cartilage from your thighbone, shinbone, and kneecap and replaces it with an artificial joint.",
//         image: "/images/services/knee-replacement-detail.jpg",
//         faqs: [],
//     };
//
//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-grow">
//                 <PageHero
//                     title={serviceInfo.title}
//                     backgroundImage="/images/100.svg"
//                     height="h-120 md:h-[40rem] lg:h-[44rem]"
//                     backgroundPositionY="calc(50% + 50px)" // Moved down even further (increased the pixel value)
//                     customContent={
//                         <div className="absolute inset-0 flex flex-col items-center">
//
//                         </div>
//                     }
//                 />
//                 <ServiceDetailTemplate service={serviceInfo} />
//                 <FaqSection />
//             </main>
//             <Footer />
//         </div>
//     );
// };
//
// export default KneeReplacement;