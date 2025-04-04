"use client";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AnimatedPhoneSection from "@/components/AnimatedPhoneSection";
import HamburgerMenu from "@/components/navigation/HamburgerMenu";
import Nav from "@/components/navigation/Nav";
import FeatureSection from "@/components/FeatureSection";
import ProfileSection from "@/components/ProfileSection";
import HeroSection from "@/components/HeroSection";


const Page: React.FC = () => {
  useEffect(() => {
    // Import Bootstrap's JS only on the client
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <HamburgerMenu/>

      <Nav />

      {/* Hero Section */}
      <HeroSection/>

      <AnimatedPhoneSection />
      
      {/* Feature Section */}
      <FeatureSection />

      {/* Profile Section */}
      <ProfileSection />

      {/* FAQ Section */}
      <section className="bg-light p-5">
        <h1 className="text-center p-3">FAQ</h1>
        <div className="accordion" id="accordionExample">
          {[1, 2, 3].map((num) => (
            <div key={num} className="accordion-item">
              <h2 className="accordion-header" id={`heading${num}`}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapse" + num}
                  aria-expanded="true"
                  aria-controls={`collapse${num}`}
                >
                  Accordion Item #{num}
                </button>
              </h2>
              <div id={`collapse${num}`} className="accordion-collapse collapse" aria-labelledby={`heading${num}`} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the {num} item's accordion body.</strong> It is hidden by default.
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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
