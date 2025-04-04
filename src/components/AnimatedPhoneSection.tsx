"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";



gsap.registerPlugin(ScrollTrigger);

const AnimatedStepsSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      stepsRef.current = Array.from(sectionRef.current.querySelectorAll(".step")) as HTMLDivElement[];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%", // Ensures enough scroll space
          pin: true, // Keeps section fixed while scrolling
          scrub: 1, // Makes animation responsive to scroll
        },
      });

      stepsRef.current.forEach((step) => {
        tl.to(step, { opacity: 1, y: 0, duration: 1 }) // Step fades in
          .to(step, { opacity: 0, y: -50, duration: 1 }, "+=1"); // Step fades out before the next one starts
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="AnimatedStepsSection vw-100 vh-100 d-flex flex-column justify-content-center align-items-center text-light text-center"
    >
      <div className="vw-100 vh-80 step fs-1 position-absolute row" style={{ opacity: 0, transform: "translateY(50px)" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">Get start</div>
        <div className="col-4 start"><Image src="/image/phone_14.png" alt="Phone preview" width={300} height={500} className="p-5" /></div>
        <div className="col-4 d-flex align-items-center justify-content-center">Sign in</div>
      </div>
      <div className="vw-100 step fs-1 position-absolute row" style={{ opacity: 0, transform: "translateY(50px)" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">Free ticket</div>
        <div className="col-4"><Image src="/image/phone_14.png" alt="Phone preview" width={300} height={500} className="p-5" /></div>
        <div className="col-4 d-flex align-items-center justify-content-center">Verify</div>
      </div>
      <div className="vw-100 step fs-1 position-absolute row" style={{ opacity: 0, transform: "translateY(50px)" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">Find your Guide</div>
        <div className="col-4"><Image src="/image/phone_14.png" alt="Phone preview" width={300} height={500} className="p-5" /></div>
        <div className="col-4 d-flex align-items-center justify-content-center">Match</div>
      </div>
      <div className="vw-100 step fs-1 position-absolute row" style={{ opacity: 0, transform: "translateY(50px)" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">Be a Guide</div>
        <div className="col-4"><Image src="/image/phone_14.png" alt="Phone preview" width={300} height={500} className="p-5" /></div>
        <div className="col-4 d-flex align-items-center justify-content-center">Earning</div>
      </div>
      <div className="vw-100 step fs-1 position-absolute row" style={{ opacity: 0, transform: "translateY(50px)" }}>
        <div className="col-4 d-flex align-items-center justify-content-center">Explore more</div>
        <div className="col-4"><Image src="/image/phone_14.png" alt="Phone preview" width={300} height={500} className="p-5" /></div>
        <div className="col-4 d-flex align-items-center justify-content-center">Redeem</div>
      </div>
    </section>
  );
};

export default AnimatedStepsSection;
