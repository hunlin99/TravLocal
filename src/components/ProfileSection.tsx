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
    name: "Jordan M.",
    role: "Local Guide",
    description: "Being a guide through TravLocal has been amazing. I met Alex from France and showed him some underground jazz spots in Harlem. It didn’t feel like work — just two people vibing over music and street food. The best part? I earned a ticket to use when I visit Paris next spring! — Jordan M., Guide from NYC",
    imageSrc: "/TravLocal/image/portrait-1.jpg",
  },
  {
    name: "Sam W.",
    role: "Traveler",
    description: "I used TravLocal during my trip to Tokyo, and it completely changed how I travel. My guide, Kenji, took me to a local ramen shop I would’ve never found and even taught me how to order like a local. No tour buses, no crowds — just real connection and unforgettable memories. I can’t wait to guide someone in Toronto next! — Sam W., Traveler from Canada",
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
