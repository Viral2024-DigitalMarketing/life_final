import React, { useEffect, useRef, useState } from 'react';

const FaqSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elements = useRef<HTMLDivElement[]>([]);
  const [openItem, setOpenItem] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
    );

    elements.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !elements.current.includes(el)) {
      elements.current.push(el);
    }
  };

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: 'What medical services does Life Hospital provide?',
      answer:
          'Life Hospital offers a wide range of specialties, including but not limited to, orthopedics and joint replacement, general surgery, internal medicine, pediatrics, cardiology, neurology, and diagnostic services. We strive to provide comprehensive care for the entire family.',
    },
    {
      id: 2,
      question: 'How can I find a specific doctor or specialist at Life Hospital?',
      answer:
          'You can find a specific doctor or specialist at Life Hospital through multiple channels. Visit our website\'s physician directory where you can search by name, specialty, or health condition. Our patient care helpline at +91 7763545463 can also help match you with an appropriate specialist based on your needs. Additionally, you can visit our front desk in person where our staff will guide you to the right healthcare professional. For specialized referrals, your primary care physician can directly connect you with the appropriate specialist within our network.',
    },
    {
      id: 3,
      question: 'What insurance plans does Life Hospital accept, and how do I know if my plan is covered?',
      answer:
          'Life Hospital accepts most major insurance plans including leading national and regional providers. To verify if your specific insurance is accepted, you can: 1) Contact our billing department at +91 7763545463 with your policy details for immediate verification, 2) Check our website\'s insurance information page where we maintain an updated list of accepted providers, 3) Call your insurance provider directly and ask if Life Hospital is in-network, or 4) Visit our administrative office with your insurance card for in-person verification. We also offer financial counseling services to help navigate coverage questions and payment options.',
    },
    {
      id: 4,
      question: 'What measures does Life Hospital take to ensure patient safety and hygiene?',
      answer:
          'Life Hospital implements comprehensive safety and hygiene protocols exceeding industry standards. Our measures include rigorous sanitization procedures in all areas using hospital-grade disinfectants, mandatory hand hygiene stations throughout the facility, regular staff training on infection control, and strict adherence to sterilization protocols for medical equipment. We maintain negative pressure isolation rooms for infectious disease control, conduct continuous air quality monitoring, and have implemented contactless check-in options. Our dedicated Infection Prevention team performs regular audits and updates protocols based on the latest medical research and guidelines. Additionally, we maintain transparent reporting of our safety metrics and have earned accreditation from leading healthcare quality organizations.',
    },
    {
      id: 5,
      question: 'Is Life Hospital open 24/7, and what about emergency services?',
      answer:
          'Yes, Life Hospital operates 24 hours a day, 7 days a week, including holidays. Our emergency department is fully staffed around the clock with board-certified emergency physicians, specialized nurses, and support staff ready to handle any medical crisis. Critical care specialists are always on call for complex emergencies. For non-emergency situations, our outpatient departments operate from 8:00 AM to 8:00 PM on weekdays and 9:00 AM to 5:00 PM on weekends. Certain specialized clinics may have specific timings, which are clearly displayed at the reception and on our website. Our pharmacy and diagnostic services also maintain 24/7 availability to support emergency care needs.',
    },
  ];

  return (
      <section ref={sectionRef} className="bg-white py-8 px-6 md:px-12 lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FAQ Heading */}
            <div ref={addToRefs} className="md:col-span-1 opacity-0">
              <h2 className="text-3xl sm:text-2xl md:text-3xl font-bold text-black mb-2 md:mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-base">
                Find answers to common questions about our services, policies, and patient care.
              </p>
            </div>

            {/* FAQ Items */}
            <div ref={addToRefs} className="md:col-span-2 space-y-4 opacity-0 animation-delay-400">
              {faqs.map((faq, index) => (
                  <div
                      key={faq.id}
                      className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden"
                  >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-3 sm:p-4 md:p-6 text-left focus:outline-none transition-colors hover:bg-gray-50"
                    >
                      <h3
                          className="text-sm sm:text-base md:text-lg font-medium"
                          style={{ fontFamily: 'Be Vietnam Pro', fontWeight: 500, color: '#000000' }}
                      >
                        {faq.question}
                      </h3>
                      <div className="transition-all duration-300">
                        <img
                            src={openItem === index ? '/images/faq_op.svg' : '/images/faq_cl.svg'}
                            alt="Toggle FAQ"
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            loading="lazy"
                        />
                      </div>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div
                          className="p-3 sm:p-4 md:p-6 pt-0 text-gray-600 text-xs sm:text-sm md:text-base"
                          style={{ fontFamily: 'Be Vietnam Pro', color: '#000000' }}
                      >
                        {faq.answer}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default FaqSection;