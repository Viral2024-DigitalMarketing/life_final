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
      question: 'What insurance plans do you accept?',
      answer:
          'Life Hospital works with most major insurance providers. We recommend contacting our billing department or your insurance company directly to verify your coverage before scheduling non-emergency procedures.',
    },
    {
      id: 2,
      question: 'How do I schedule an appointment?',
      answer:
          'You can schedule an appointment by calling our main line, using our online booking system on our website, or through the patient portal. For specialist appointments, a referral may be required depending on your insurance plan.',
    },
    {
      id: 3,
      question: 'What should I bring to my first appointment?',
      answer:
          'Please bring your government-issued ID, insurance card, list of current medications, medical records if available, and any referral forms. Arriving 15 minutes early to complete paperwork is recommended for new patients.',
    },
    {
      id: 4,
      question: 'Do you offer telehealth services?',
      answer:
          'Yes, we offer telehealth appointments for many specialties and follow-up visits. These virtual consultations are convenient for patients and provide the same quality care as in-person visits for appropriate medical situations.',
    },
    {
      id: 5,
      question: 'What are your visiting hours?',
      answer:
          'Our general visiting hours are 8:00 AM to 8:00 PM daily. Specialized units like ICU may have restricted visiting hours. We recommend checking our website or calling ahead for the most current information.',
    },
  ];

  return (
      <section
          ref={sectionRef}
          className="bg-white py-24 px-6 md:px-12 lg:px-24"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* FAQ Heading */}
            <div ref={addToRefs} className="md:col-span-1 opacity-0">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700">
                Find answers to common questions about our services, policies, and
                patient care.
              </p>
            </div>

            {/* FAQ Items */}
            <div
                ref={addToRefs}
                className="md:col-span-2 space-y-4 opacity-0 animation-delay-400"
            >
              {faqs.map((faq, index) => (
                  <div
                      key={faq.id}
                      className="border border-gray-100 rounded-lg shadow-sm bg-white overflow-hidden"
                  >
                    <button
                        onClick={() => toggleItem(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none transition-colors hover:bg-gray-50"
                    >
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <div className="transition-all duration-300">
                        <img
                            src={
                              openItem === index
                                  ? '/images/faq-icon-open.svg'
                                  : '/images/faq-icon-default.svg'
                            }
                            alt="Toggle FAQ"
                            className="w-6 h-6"
                        />
                      </div>
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                    >
                      <div className="p-6 pt-0 text-gray-600">{faq.answer}</div>
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
