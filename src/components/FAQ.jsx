import React, { useRef } from "react";
import { gsap } from "gsap";

const faqItems = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide with reliable carriers.",
  },
  {
    question: "How can I track my order?",
    answer: "You’ll receive a tracking link by email once your order is shipped.",
  },
];

const FAQ = () => {
  const refs = useRef([]);

  const toggleFAQ = (index) => {
    const item = refs.current[index];
    const isOpen = item.classList.contains("open");

    if (isOpen) {
      // Collapse
      gsap.to(item.querySelector(".answer"), {
        height: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => item.classList.remove("open"),
      });
    } else {
      // Expand
      item.classList.add("open");
      const answer = item.querySelector(".answer");
      answer.style.height = "auto";
      const height = answer.clientHeight;
      answer.style.height = "0px";
      gsap.to(answer, {
        height,
        duration: 0.4,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className="border border-gray-300 rounded-md p-4 bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-lg focus:outline-none"
            >
              {item.question}
            </button>
            <div
              className="answer overflow-hidden h-0 text-gray-600 transition-all duration-300"
            >
              <p className="pt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
