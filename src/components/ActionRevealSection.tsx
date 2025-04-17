"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ActionRevealSection.module.css"; // Assuming you have a CSS module for styles

gsap.registerPlugin(ScrollTrigger);


const AnimatedStepsSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current && wrapperRef.current) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top top",
            end: "+=800",
            scrub: 1,
            pin: true,
          },
        });

        // 1. Scale the text throughout the scroll
        timeline.to(textRef.current, {
          scale: 100,
          ease: "none",
        });

        // 2. Fade out the mask from +400 to +700 → (400/800 = 0.5), (700/800 = 0.875)
        timeline.to(
          `.${styles.videoMask}`,
          { opacity: 0, ease: "none" },
          0.1 // fade starts at halfway through the scroll (400px)
        ).to(
          `.${styles.videoMask}`,
          { opacity: 0 },
          0.875 // ensures it’s fully faded by 700px
        );

        // 3. Fade in the CTA content during the same range
        timeline.fromTo(
          `.${styles.ctaContent}`,
          { opacity: 0 },
          { opacity: 1, ease: "none" },
          0.3 // same as mask fade start
        ).to(
          `.${styles.ctaContent}`,
          { opacity: 1 },
          0.5 // same as mask fade end
        );
        
      }
    }, wrapperRef);


    return () => ctx.revert();
  }, []);


  return (
    <section className={styles.maskSection} ref={wrapperRef}>
      <div className={styles.maskWrapper}>
        <img
          src="/TravLocal/image/cover-img-2.jpg"
          alt="Visual"
          className={styles.backgroundImage}
        />

        {/* ✅ This is the final visible content, centered under the mask */}
        <div className={`${styles.ctaContent} container text-white py-5 text-center mt-5`}>
          <h1>Ready for Authentic Adventures?</h1>
          <div className="pt-5 d-flex justify-content-center">
            <a className="mx-3 btn btn-light btn-lg px-4" href="#">App Store</a>
            <a className="mx-3 btn btn-light btn-lg px-4" href="#">Google Play</a>
          </div>
        </div>

        {/* This is the masking layer that fades away */}
        <div className={styles.videoMask}>
          <h2 className={styles.clipText} ref={textRef}>TravLocal</h2>
        </div>
      </div>
    </section>

  );
};

export default AnimatedStepsSection;
