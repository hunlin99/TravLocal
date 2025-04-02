"use client"; // If using hooks or interactivity

import React from "react";

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
    imageSrc: "/images/local-guide.jpg",
  },
  {
    name: "Christine C.",
    role: "Traveler",
    description: "I got to see hidden gems that I would have never found on my own. My guide was super friendly and even took me to a local café that wasn’t on any travel blogs!",
    imageSrc: "image/traveler.jpg",
  },
];

const ProfileCard: React.FC<Profile> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="col-md-6 col-12 p-5">
      <div className="card profile-card px-5">
        <div className="card-body text-center">
          <div className="w-50 rounded-circle profile-img mb-3 bg-dark ratio ratio-1x1 mx-auto">
            <img src={imageSrc} alt={`${name} Profile`} className="img-fluid rounded-circle" />
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
    <section className="ProfileSection vh-100 d-flex justify-content-center align-items-center">
      <div className="container row">
        {profiles.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </section>
  );
};

export default ProfileSection;
