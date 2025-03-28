import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedStepsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Ensure sectionRef.current exists before querying child elements
    if (sectionRef.current) {
      // Select all step elements inside the section
      stepsRef.current = Array.from(sectionRef.current.querySelectorAll(".step")) as HTMLDivElement[];

      // Setup GSAP animations for each step
      const ctx = gsap.context(() => {
        // Pin the section while user scrolls through steps
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=100%", // Extends scroll duration
          pin: true,
          scrub: 1,
        });

        stepsRef.current.forEach((step, index) => {
          gsap.fromTo(
            step,
            { opacity: 0, y: 50 }, // Start with opacity 0, slightly below
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: `top+=${index * 25}% center`, // Adjusted for better timing
                end: `top+=${(index + 1) * 25}% center`, // Each step takes a third of the scroll area
                toggleActions: "play none none reverse", // Trigger animation on scroll
                scrub: 1, // Make it smooth with scrub
              },
            }
          );
        });
      });

      return () => ctx.revert(); // Cleanup GSAP context on component unmount
    }
  }, []); // Empty dependency array ensures this effect only runs once on mount

  return (
    <section
      ref={sectionRef}
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-light text-center"
    >
      <div className="step fs-1 mb-5" style={{ opacity: 0, transform: "translateY(50px)" }}>
        Step 1: Open the App
      </div>
      <div className="step fs-1 mb-5" style={{ opacity: 0, transform: "translateY(50px)" }}>
        Step 2: Choose Your Guide
      </div>
      <div className="step fs-1 mb-5" style={{ opacity: 0, transform: "translateY(50px)" }}>
        Step 3: Enjoy Your Trip!
      </div>
    </section>
  );
};

export default AnimatedStepsSection;