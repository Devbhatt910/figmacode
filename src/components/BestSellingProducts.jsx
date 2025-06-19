import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const sampleProducts = [
  { id: 1, title: "Luxury Chair", image: "🪑" },
  { id: 2, title: "Smart Lamp", image: "💡" },
  { id: 3, title: "Sleek Table", image: "🪟" },
  { id: 4, title: "Designer Sofa", image: "🛋️" },
];

const BestSellingProducts = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const handleSlide = (direction) => {
    const itemWidth = sliderRef.current.children[0].offsetWidth + 16; // + gap
    const newIndex = direction === "next" ? index + 1 : index - 1;

    if (newIndex >= 0 && newIndex <= sampleProducts.length - 1) {
      setIndex(newIndex);
      gsap.to(sliderRef.current, {
        x: -itemWidth * newIndex,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Best Selling Products</h2>

      <div className="relative overflow-hidden max-w-5xl mx-auto">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex transition-transform gap-4"
        >
          {sampleProducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[240px] bg-gray-100 rounded-lg p-6 text-center shadow-md"
            >
              <div className="text-5xl mb-4">{product.image}</div>
              <h3 className="font-semibold">{product.title}</h3>
            </div>
          ))}
        </div>

        {/* Buttons (mobile/tablet only) */}
        <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
          <button
            onClick={() => handleSlide("prev")}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
          >
            ◀
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
          <button
            onClick={() => handleSlide("next")}
            className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellingProducts;
