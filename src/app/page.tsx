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
import Footer from "@/components/footer";


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
      <Footer />
    </>
  );
};

export default Page;
