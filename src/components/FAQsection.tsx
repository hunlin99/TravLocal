"use client";
import { useState } from "react";
// pages/_document.tsx or _app.tsx

// Step 1: FAQ data
const faqItems = [
  {
    header: "How does the ticket system work?",
    description:
      "TravLocal replaces traditional payments with a ticket-based system. When you sign up, you receive a ticket to book a personalized experience with a local guide. Later, when you act as a guide in your own city, you earn another ticket for your future travels — creating a sustainable cycle of exchange.",
  },
  {
    header: "Can I choose the type of tour I want?",
    description:
      "Yes! Our platform matches you with locals based on shared interests, preferred activities, and language. Whether you’re into food, architecture, nature, or nightlife, you can customize your travel experience to suit your preferences.",
  },
  {
    header: "Do I need to be an experienced guide to host someone?",
    description:
      "Not at all. Anyone can be a local guide by simply sharing their knowledge and love for their city. Whether it’s your favorite coffee shop, hidden art alley, or weekend market, your authentic perspective is what makes the experience valuable.",
  },
];

// Step 2: React component
const FAQsection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion p-5" id="accordionExample">
      {faqItems.map((item, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
              type="button"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`collapse${index}`}
            >
              {item.header}
            </button>
          </h2>
          <div
            id={`collapse${index}`}
            className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQsection;
