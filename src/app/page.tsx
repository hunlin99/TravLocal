"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedPhoneSection from "@/components/AnimatedPhoneSection";
import HamburgerMenu from "@/components/navigation/HamburgerMenu";
import Nav from "@/components/navigation/Nav";
import FeatureSection from "@/components/FeatureSection";
import ProfileSection from "@/components/ProfileSection";
import HeroSection from "@/components/HeroSection";
import FAQsection from "@/components/FAQsection";
import ActionRevealSection from "@/components/ActionRevealSection";


const Page: React.FC = () => {

  return (
    <>
      <HamburgerMenu />

      <Nav />

      {/* Hero Section */}
      <HeroSection />

      <AnimatedPhoneSection />

      {/* Feature Section */}
      <FeatureSection />
      <div className="featuresection-bottom-container">
        <div className="featuresection-bottom">
        </div>
      </div>
      <div className="profilesection-top-container">
        <div className="profilesection-top"></div>
      </div>
      {/* Profile Section */}
      <ProfileSection />

      <ActionRevealSection />

      {/* FAQ Section */}
      <FAQsection />

      {/* Footer Section */}
      <section className="bg-dark p-5 vh-50">
        <div className="container d-flex justify-content-between">
          <div className="py-5 col-3">
            <div className="d-grid gap-3 text-white">
              <h3>Download <br /> TravLocal app</h3>
              <a className="btn btn-outline-light btn-lg px-4" href="#">App Store</a>
              <a className="btn btn-outline-light btn-lg px-4" href="#">Google Play</a>
            </div>
          </div>
          <div className="py-5 col-9 text-end">
            <a href="#" className="text-white mx-3">About Us</a>
            <a href="#" className="text-white mx-3">FAQ</a>
            <a href="#" className="text-white mx-3">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
