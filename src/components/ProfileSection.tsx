"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Profile {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const profiles: Profile[] = [
  {
    name: "Aiko O.",
    role: "Local Guide",
    description: "I love meeting travelers and showing them the real culture of my city. It’s so rewarding, and I’ve even made friends from different countries!",
    imageSrc: "/TravLocal/image/portrait-1.jpg",
  },
  {
    name: "Christine C.",
    role: "Traveler",
    description: "I got to see hidden gems that I would have never found on my own. My guide was super friendly and even took me to a local café that wasn’t on any travel blogs!",
    imageSrc: "/TravLocal/image/portrait-2.jpg",
  },
];

const ProfileCard: React.FC<Profile> = ({ name, role, description, imageSrc }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="col-md-6 col-12 pb-5" ref={cardRef}>
      <div className="card profile-card px-5">
        <div className="card-body text-center">
          <div className="w-50 rounded-circle profile-img mb-3 bg-dark ratio ratio-1x1 mx-auto">
            <Image
              src={imageSrc}
              alt={`${name} Profile`}
              width={150}
              height={150}
              className="img-fluid rounded-circle"
            />
          </div>
          <h3 className="card-title mb-2">{name}</h3>
          <p className="card-text text-muted mb-3">{role}</p>
          <p className="card-text mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProfileSection: React.FC = () => {
  return (
    <section className="ProfileSection d-flex justify-content-center align-items-center pb-5">
      <div className="container row pb-5">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
