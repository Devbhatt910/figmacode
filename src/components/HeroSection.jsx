import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    // Initial hero fade-in
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    // Word-by-word scroll animation
    const words = paraRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  const paragraph = "Explore premium quality products designed for modern living.";

  return(
    <section ref={heroRef} 
    className="min-h-screen flex items-center justify-center bg-black text-white text-center px-6">

          <div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to our Store</h1>
              <p
              className="text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
              ref={paraRef}>

                    {paragraph.split(" ").map((word,index) =>(
                      <span key={index} className="inline-block mr-1 opacity-0">
                            {word}
                      </span>
                    ))}

              </p>

          </div>

    </section>
  );
};

export default HeroSection;